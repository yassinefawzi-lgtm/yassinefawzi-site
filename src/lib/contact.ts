import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez au moins 2 caractères.").max(100),
  email: z.email("Indiquez une adresse email valide.").max(254),
  intent: z.enum(["recrutement", "prestation", "autre"]),
  message: z
    .string()
    .trim()
    .min(20, "Votre message doit contenir au moins 20 caractères.")
    .max(5000),
  website: z.string().max(200).optional().default(""),
  token: z.string().max(2048).optional().default(""),
  startedAt: z.number().finite(),
});
export type ContactInput = z.infer<typeof contactSchema>;
export const MAX_CONTACT_BYTES = 20_000;
export function contactConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_FROM &&
    process.env.CONTACT_TO &&
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    process.env.TURNSTILE_SECRET_KEY &&
    process.env.TURNSTILE_ALLOWED_HOSTNAMES,
  );
}
