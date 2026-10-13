"use client";
import Link from "next/link";
import Script from "next/script";
import { useRef, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { contactSchema } from "@/lib/contact";
import { track } from "@/lib/analytics";
declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          action: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (id: string) => void;
    };
  }
}
export function ContactForm({ configured }: { configured: boolean }) {
  const [phase, setPhase] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const startedAt = useRef(0);
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [challenge, setChallenge] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function renderChallenge() {
    if (widget.current && window.turnstile && !widgetId.current)
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: site.turnstileSiteKey,
        action: "contact",
        callback: setToken,
        "expired-callback": () => setToken(""),
        "error-callback": () => {
          setToken("");
          setPhase("error");
          setStatus(
            "La vérification antispam n’a pas pu charger. Réessayez ou utilisez le contact direct.",
          );
        },
      });
  }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase === "sending" || !configured) return;
    const form = new FormData(e.currentTarget);
    const values = {
      name: form.get("name"),
      email: form.get("email"),
      intent: form.get("intent"),
      message: form.get("message"),
      website: form.get("website"),
      token,
      startedAt: startedAt.current,
    };
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      setPhase("error");
      setStatus(result.error.issues[0].message);
      return;
    }
    if (!token) {
      setPhase("error");
      setStatus("Veuillez terminer la vérification antispam.");
      return;
    }
    setPhase("sending");
    setStatus("Envoi en cours…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(25_000),
      });
      const data = (await response.json()) as { message: string };
      setStatus(data.message);
      setPhase(response.ok ? "success" : "error");
      if (response.ok) {
        track("contact_form_submit", { intent: result.data.intent });
        formRef.current?.reset();
        startedAt.current = Date.now();
      }
    } catch {
      setPhase("error");
      setStatus(
        "La connexion a été interrompue. L’envoi n’a pas pu être confirmé.",
      );
    } finally {
      setToken("");
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      ref={formRef}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
    >
      {!configured && (
        <div className="notice" role="status">
          <strong>Formulaire en préparation.</strong>
          <p>
            Le service d’envoi n’est pas encore connecté. Aucun message ne peut
            être transmis pour le moment.
          </p>
        </div>
      )}
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
        <label htmlFor="website">Laisser ce champ vide</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-info">
        Les champs marqués * sont nécessaires pour répondre à votre demande. Vos
        coordonnées ne sont pas envoyées aux outils d’analyse.{" "}
        <Link href="/confidentialite">Utilisation de vos données</Link>.
      </p>
      {configured && (
        <>
          <p className="form-info">
            La vérification antispam est assurée par Cloudflare Turnstile,
            chargé uniquement à votre demande.
          </p>
          {!challenge && (
            <button
              type="button"
              className="button button-outline"
              onClick={() => setChallenge(true)}
            >
              Activer la vérification antispam
            </button>
          )}
          <div ref={widget} />
          {challenge && (
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              onReady={renderChallenge}
              onError={() => {
                setPhase("error");
                setStatus("Le service antispam est indisponible.");
              }}
            />
          )}
        </>
      )}
      <button
        type="submit"
        className="button"
        disabled={!configured || phase === "sending"}
      >
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
