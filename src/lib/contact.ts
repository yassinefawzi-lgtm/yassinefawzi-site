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
});
export type ContactInput = z.infer<typeof contactSchema>;
// Nom du formulaire déclaré dans public/__forms.html (détection Netlify Forms).
export const CONTACT_FORM_NAME = "contact";
export const CONTACT_FORM_ENDPOINT = "/__forms.html";
export const contactSubjects: Record<ContactInput["intent"], string> = {
  recrutement: "Opportunité de recrutement",
  prestation: "Mission ou projet",
  autre: "Autre sujet",
};
