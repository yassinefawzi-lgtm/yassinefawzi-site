import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("accueil : rendu, liens, consentement et absence de débordement", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  const thirdParty: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (/google-analytics|googletagmanager|doubleclick/.test(request.url()))
      thirdParty.push(request.url());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Des idées.",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(
    page.getByRole("link", { name: "Découvrir mes projets" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Préférences cookies" }).click();
  await expect(
    page.getByText(
      "La mesure d’audience et les tags publicitaires sont actuellement désactivés.",
    ),
  ).toBeVisible();
  await page.getByRole("button", { name: "Fermer", exact: true }).click();
  expect(errors).toEqual([]);
  expect(thirdParty).toEqual([]);
  await page.goto("/");
  await page.screenshot({
    path: `test-results/accueil-${testInfo.project.name}.png`,
    fullPage: true,
  });
});
test("portfolio : filtres et étude de cas", async ({ page }) => {
  await page.goto("/projets");
  await page
    .getByRole("button", { name: "Automatisation", exact: true })
    .click();
  await expect(page.getByRole("status")).toContainText("2 projets");
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page
    .getByRole("link", {
      name: "Génération d’offres de reprise — lire l’étude de cas",
    })
    .click();
  await expect(
    page.getByRole("heading", { name: "Les résultats disponibles." }),
  ).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://yassinefawzi.fr/projets/offres-de-reprise",
  );
});
test("pages secondaires, métadonnées, états vides et 404", async ({ page }) => {
  for (const route of [
    "/a-propos",
    "/competences",
    "/cv",
    "/journal",
    "/growth-lab",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/experiences",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/journal/premiere-experimentation");
  await expect(
    page.getByRole("heading", { name: "Cette piste ne mène nulle part." }),
  ).toBeVisible();
  const response = await page.goto("/page-inexistante");
  expect(response?.status()).toBe(404);
});
test("contact : formulaire Netlify actif", async ({ page }) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("button", { name: "Envoyer mon message" }),
  ).toBeEnabled();
  await expect(page.locator('form[name="contact"]')).toHaveAttribute(
    "data-netlify",
    "true",
  );
});
test("accessibilité automatique des principaux parcours", async ({ page }) => {
  for (const route of [
    "/",
    "/projets",
    "/projets/acquisition-cabinet-avocat",
    "/contact",
    "/cv",
    "/growth-lab",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations,
      `${route}: ${JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
    ).toEqual([]);
  }
});
test("clavier et menu mobile", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Aller au contenu" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  if (isMobile) {
    const menu = page.getByRole("button", { name: "Menu +" });
    await menu.click();
    await expect(
      page.getByRole("button", { name: "Fermer −" }),
    ).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Menu +" })).toBeFocused();
    await page.getByRole("button", { name: "Menu +" }).click();
    await page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: "À propos" })
      .click();
    await expect(page.locator("h1")).toContainText("Apprendre en faisant.");
  }
});

test("CV confirmé, document téléchargeable et portrait chargé", async ({
  page,
  request,
}) => {
  await page.goto("/cv");
  await expect(
    page.getByText(
      "Responsable marketing et commercial spécialisé en acquisition numérique",
      { exact: true },
    ),
  ).toBeVisible();
  const pdf = await request.get("/cv/yassine-fawzi.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await page.goto("/");
  const portrait = page.locator(".hero-person img");
  await expect(portrait).toBeVisible();
  await expect
    .poll(() => portrait.evaluate((img: HTMLImageElement) => img.naturalWidth))
    .toBeGreaterThan(0);
});
