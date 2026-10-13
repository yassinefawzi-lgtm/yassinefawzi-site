import {
  contactConfigured,
  contactSchema,
  MAX_CONTACT_BYTES,
} from "@/lib/contact";
export const runtime = "nodejs";
const reply = (message: string, status: number) =>
  Response.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Même origine : vérification stricte, y compris sur les previews Vercel.
  if (!origin || origin !== new URL(request.url).origin)
    return reply("Origine de la demande non autorisée.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply("Format de demande non pris en charge.", 415);
  if (Number(request.headers.get("content-length")) > MAX_CONTACT_BYTES)
    return reply("Message trop volumineux.", 413);
  let data: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("Demande vide.", 400);
    let bytes = 0;
    let raw = "";
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_CONTACT_BYTES) {
        await reader.cancel();
        return reply("Message trop volumineux.", 413);
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
    data = JSON.parse(raw);
  } catch {
    return reply("Demande illisible. Veuillez réessayer.", 400);
  }
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success)
    return reply(
      "Vérifiez votre nom, votre email et votre message (20 à 5 000 caractères).",
      400,
    );
  const input = parsed.data;
  if (
    input.website ||
    Date.now() - input.startedAt < 2000 ||
    input.startedAt > Date.now() ||
    Date.now() - input.startedAt > 86_400_000
  )
    return reply(
      "Vérification antispam échouée. Rechargez le formulaire et réessayez.",
      400,
    );
  if (!contactConfigured())
    return reply(
      "Le formulaire n’est pas encore activé. Aucun message n’a été envoyé.",
      503,
    );
  if (!input.token)
    return reply("Veuillez terminer la vérification antispam.", 400);
  try {
    const check = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: input.token,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );
    if (!check.ok)
      return reply("Le service antispam est temporairement indisponible.", 502);
    const result = (await check.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
    };
    const hosts = process.env
      .TURNSTILE_ALLOWED_HOSTNAMES!.split(",")
      .map((h) => h.trim());
    if (
      !result.success ||
      !result.hostname ||
      !hosts.includes(result.hostname) ||
      result.action !== "contact"
    )
      return reply(
        "Vérification antispam expirée ou invalide. Veuillez réessayer.",
        400,
      );
    const send = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: [process.env.CONTACT_TO],
        reply_to: input.email,
        subject: `[Site personnel] ${input.intent}`,
        text: `Type : ${input.intent}\nNom : ${input.name}\nEmail : ${input.email}\n\n${input.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!send.ok)
      return reply(
        "L’envoi n’a pas pu être confirmé. Réessayez plus tard ou utilisez le contact direct.",
        502,
      );
    return reply(
      "Votre demande a été transmise au service d’envoi. Merci pour votre message.",
      200,
    );
  } catch {
    return reply(
      "L’envoi n’a pas pu être confirmé. Réessayez plus tard ou utilisez le contact direct.",
      502,
    );
  }
}
