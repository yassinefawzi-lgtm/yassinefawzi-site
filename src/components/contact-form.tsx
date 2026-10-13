"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import {
  CONTACT_FORM_ENDPOINT,
  CONTACT_FORM_NAME,
  contactSchema,
  contactSubjects,
} from "@/lib/contact";
import { track } from "@/lib/analytics";
export function ContactForm() {
  const [phase, setPhase] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [status, setStatus] = useState("");
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase === "sending") return;
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      intent: form.get("intent"),
      message: form.get("message"),
    });
    if (!result.success) {
      setPhase("error");
      setStatus(result.error.issues[0].message);
      return;
    }
    // Honeypot rempli ou envoi quasi instantané : probablement un robot.
    if (
      form.get("bot-field") ||
      (startedAt.current && Date.now() - startedAt.current < 2000)
    ) {
      setPhase("error");
      setStatus(
        "Vérification antispam échouée. Rechargez la page et réessayez.",
      );
      return;
    }
    setPhase("sending");
    setStatus("Envoi en cours…");
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": CONTACT_FORM_NAME,
          subject: `[Site personnel] ${contactSubjects[result.data.intent]}`,
          "bot-field": "",
          ...result.data,
        }).toString(),
        signal: AbortSignal.timeout(25_000),
      });
      if (!response.ok) throw new Error(String(response.status));
      setPhase("success");
      setStatus(
        "Votre message a bien été envoyé. Merci, je vous réponds rapidement.",
      );
      track("contact_form_submit", { intent: result.data.intent });
      formRef.current?.reset();
      startedAt.current = Date.now();
    } catch {
      setPhase("error");
      setStatus(
        "L’envoi n’a pas pu être confirmé. Réessayez plus tard ou utilisez le contact direct.",
      );
    }
  }
  return (
    <form
      className="contact-form"
      name={CONTACT_FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      ref={formRef}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
    >
      <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Votre nom *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Votre email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="intent">Vous me contactez pour… *</label>
        <select id="intent" name="intent" required defaultValue="">
          <option value="" disabled>
            Choisir un sujet
          </option>
          <option value="recrutement">Une opportunité de recrutement</option>
          <option value="prestation">Une mission ou un projet</option>
          <option value="autre">Un autre sujet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Quelques mots sur votre besoin *</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={6}
          aria-describedby="message-help"
        />
        <small id="message-help">
          20 à 5 000 caractères. Évitez d’inclure des informations
          confidentielles.
        </small>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="bot-field">Laisser ce champ vide</label>
        <input
          id="bot-field"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p className="form-info">
        Les champs marqués * sont nécessaires pour répondre à votre demande. Vos
        coordonnées ne sont pas envoyées aux outils d’analyse.{" "}
        <Link href="/confidentialite">Utilisation de vos données</Link>.
      </p>
      <button type="submit" className="button" disabled={phase === "sending"}>
        {phase === "sending" ? "Envoi en cours…" : "Envoyer mon message ↗"}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status && (
          <p className={`form-status ${phase === "error" ? "error" : ""}`}>
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
