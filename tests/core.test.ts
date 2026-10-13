import test from "node:test";
import assert from "node:assert/strict";
import {
  parseConsent,
  CONSENT_DURATION,
  safeAttribution,
} from "../src/lib/analytics";
import { contactSchema } from "../src/lib/contact";
import { getPosts } from "../src/lib/posts";
import { projects } from "../src/content/projects";
test("consentement : absence, corruption, ancien schéma et expiration ne donnent aucun accord", () => {
  for (const value of [
    null,
    "{",
    "{}",
    JSON.stringify({ version: 0, analytics: true }),
    JSON.stringify({
      version: 1,
      analytics: true,
      advertising: true,
      at: Date.now() - CONSENT_DURATION - 1,
    }),
  ])
    assert.equal(parseConsent(value), null);
});
test("consentement : finalités distinctes et timestamp futur refusé", () => {
  const c = { version: 1, analytics: true, advertising: false, at: 1000 };
  assert.deepEqual(parseConsent(JSON.stringify(c), 2000), c);
  assert.equal(parseConsent(JSON.stringify(c), 500), null);
});
test("attribution : rejeter les UTM libres et les paramètres personnels", () => {
  assert.deepEqual(
    safeAttribution(
      "?utm_source=alice%40example.com&utm_campaign=123456&email=alice@example.com",
    ),
    {},
  );
  assert.deepEqual(
    safeAttribution(
      "?utm_source=google&utm_medium=cpc&utm_campaign=portfolio-launch&gclid=secret",
    ),
    {
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "portfolio-launch",
    },
  );
});
test("formulaire : valider les limites et rejeter les adresses ou sujets invalides", () => {
  const input = {
    name: "Test",
    email: "test@example.com",
    intent: "prestation",
    message: "Un message de test suffisamment détaillé.",
    startedAt: Date.now() - 5000,
  };
  assert.equal(contactSchema.safeParse(input).success, true);
  for (const change of [
    { email: "invalide" },
    { message: "court" },
    { message: "x".repeat(5001) },
    { intent: "autre-valeur" },
    { name: "" },
  ])
    assert.equal(
      contactSchema.safeParse({ ...input, ...change }).success,
      false,
    );
});
test("journal : aucun brouillon ni article fictif n’est publié", () => {
  assert.deepEqual(getPosts(), []);
});
test("portfolio : slugs uniques et études de cas documentées", () => {
  assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length);
  for (const project of projects) {
    assert.ok(/^[a-z0-9-]+$/.test(project.slug));
    assert.ok(project.solution.length > 30);
    assert.ok(project.context.length > 0);
  }
});
