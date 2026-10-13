import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../src/app/api/contact/route";
const input = () => ({
  name: "Test",
  email: "test@example.com",
  intent: "prestation",
  message: "Un message de test sans données réelles.",
  startedAt: Date.now() - 5000,
  website: "",
  token: "test-token",
});
const request = (body: unknown, origin = "https://example.test") =>
  new Request("https://example.test/api/contact", {
    method: "POST",
    headers: { origin, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
const keys = [
  "RESEND_API_KEY",
  "CONTACT_FROM",
  "CONTACT_TO",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
  "TURNSTILE_ALLOWED_HOSTNAMES",
] as const;
test("API contact : validation, configuration et fournisseurs simulés", async (t) => {
  const previous = Object.fromEntries(keys.map((k) => [k, process.env[k]]));
  const originalFetch = global.fetch;
  try {
    for (const k of keys) delete process.env[k];
    await t.test("refuse une requête cross-origin", async () =>
      assert.equal(
        (await POST(request(input(), "https://evil.test"))).status,
        403,
      ),
    );
    await t.test("refuse les données invalides", async () =>
      assert.equal(
        (await POST(request({ ...input(), email: "invalid" }))).status,
        400,
      ),
    );
    await t.test(
      "refuse le honeypot et les soumissions trop rapides",
      async () => {
        assert.equal(
          (await POST(request({ ...input(), website: "spam" }))).status,
          400,
        );
        assert.equal(
          (await POST(request({ ...input(), startedAt: Date.now() }))).status,
          400,
        );
      },
    );
    await t.test(
      "rejette les corps volumineux même sans content-length",
      async () =>
        assert.equal(
          (await POST(request({ message: "x".repeat(21000) }))).status,
          413,
        ),
    );
    await t.test("ne simule pas de succès sans configuration", async () =>
      assert.equal((await POST(request(input()))).status, 503),
    );
    for (const k of keys) process.env[k] = "test-only";
    process.env.TURNSTILE_ALLOWED_HOSTNAMES = "example.test";
    await t.test("refuse un hôte antispam différent", async () => {
      global.fetch = async () =>
        Response.json({
          success: true,
          hostname: "evil.test",
          action: "contact",
        });
      assert.equal((await POST(request(input()))).status, 400);
    });
    await t.test("refuse une action antispam incorrecte", async () => {
      global.fetch = async () =>
        Response.json({
          success: true,
          hostname: "example.test",
          action: "login",
        });
      assert.equal((await POST(request(input()))).status, 400);
    });
    await t.test(
      "un échec du fournisseur email n’est jamais un succès",
      async () => {
        global.fetch = async (url) =>
          String(url).includes("turnstile")
            ? Response.json({
                success: true,
                hostname: "example.test",
                action: "contact",
              })
            : Response.json({ error: "simulated" }, { status: 500 });
        assert.equal((await POST(request(input()))).status, 502);
      },
    );
    await t.test(
      "succès uniquement après vérification et acceptation email",
      async () => {
        const calls: string[] = [];
        global.fetch = async (url, options) => {
          calls.push(String(url));
          if (String(url).includes("turnstile"))
            return Response.json({
              success: true,
              hostname: "example.test",
              action: "contact",
            });
          const sent = JSON.parse(String(options?.body));
          assert.equal(sent.reply_to, "test@example.com");
          assert.equal(sent.html, undefined);
          return Response.json({ id: "simulated-email" });
        };
        assert.equal((await POST(request(input()))).status, 200);
        assert.equal(calls.length, 2);
      },
    );
    await t.test("erreur réseau gérée sans divulguer les secrets", async () => {
      global.fetch = async () => {
        throw new Error("private");
      };
      const response = await POST(request(input()));
      assert.equal(response.status, 502);
      assert.ok(!(await response.text()).includes("private"));
    });
  } finally {
    global.fetch = originalFetch;
    for (const k of keys) {
      if (previous[k] === undefined) delete process.env[k];
      else process.env[k] = previous[k];
    }
  }
});
