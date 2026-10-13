"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import {
  CONSENT_KEY,
  getConsent,
  safeAttribution,
  type Consent,
} from "@/lib/analytics";

function pushConsent(consent: Consent, command: "default" | "update") {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    // Google attend un objet Arguments pour ses commandes, pas un événement tableau.
    // eslint-disable-next-line prefer-rest-params
    if (args.length) window.dataLayer!.push(arguments);
  }
  gtag("consent", command, {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.advertising ? "granted" : "denied",
    ad_user_data: consent.advertising ? "granted" : "denied",
    ad_personalization: consent.advertising ? "granted" : "denied",
  });
}
function enableTracking(consent: Consent) {
  if (
    !/^GTM-[A-Z0-9]+$/.test(site.gtmId) ||
    (!consent.analytics && !consent.advertising)
  )
    return;
  if (!document.getElementById("yf-gtm")) {
    pushConsent(
      { version: 1, at: Date.now(), analytics: false, advertising: false },
      "default",
    );
    pushConsent(consent, "update");
    window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.id = "yf-gtm";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${site.gtmId}`;
    document.head.appendChild(script);
  } else pushConsent(consent, "update");
  if (consent.analytics)
    window.dataLayer!.push({
      event: "consent_ready",
      ...safeAttribution(location.search),
    });
}
export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="footer-link"
      onClick={() => window.dispatchEvent(new Event("yf:preferences"))}
    >
      Préférences cookies
    </button>
  );
}
export function ConsentManager() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const current = getConsent();
    if (current) enableTracking(current);
    const show = () => {
      const saved = getConsent();
      setAnalytics(saved?.analytics || false);
      setAdvertising(saved?.advertising || false);
      setVisible(true);
    };
    const timer = window.setTimeout(() => {
      if (!current && site.gtmId) setVisible(true);
    }, 0);
    window.addEventListener("yf:preferences", show);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("yf:preferences", show);
    };
  }, []);
  useEffect(() => {
    if (getConsent()?.analytics && site.gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "page_view", page_path: pathname });
    }
  }, [pathname]);
  function save(a: boolean, b: boolean) {
    const previous = getConsent();
    const value: Consent = {
      version: 1,
      analytics: a,
      advertising: b,
      at: Date.now(),
    };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    } catch {
      setVisible(false);
      return;
    }
    setVisible(false);
    if ((previous?.analytics && !a) || (previous?.advertising && !b)) {
      pushConsent(value, "update");
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (/^(_ga|_gid|_gat|_gcl)/.test(name)) {
          const domains = [
            "",
            location.hostname,
            `.${location.hostname}`,
            `.${new URL(site.url).hostname}`,
          ];
          for (const domain of domains)
            document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
        }
      }
      location.reload();
      return;
    }
    enableTracking(value);
    if (a && !previous?.analytics && site.gtmId)
      window.dataLayer!.push({ event: "page_view", page_path: pathname });
  }
  if (!visible) return null;
  return (
    <section
      className="consent-panel"
      aria-label="Préférences de confidentialité"
    >
      <div>
        <p className="eyebrow">Votre choix, simplement</p>
        <h2>Une mesure qui vous laisse le choix.</h2>
        <p>
          {site.gtmId
            ? "Avec votre accord, des outils Google peuvent mesurer les visites ou les campagnes publicitaires. Aucun de ces outils ne démarre avant votre choix."
            : "La mesure d’audience et les tags publicitaires sont actuellement désactivés. Aucun de ces tags n’est chargé."}
        </p>
      </div>
      {site.gtmId && (
        <div className="consent-options">
          <label>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />{" "}
            Mesure d’audience
          </label>
          <label>
            <input
              type="checkbox"
              checked={advertising}
              onChange={(e) => setAdvertising(e.target.checked)}
            />{" "}
            Mesure publicitaire
          </label>
        </div>
      )}
      <div className="button-row">
        {site.gtmId ? (
          <>
            <button
              className="button button-outline"
              onClick={() => save(false, false)}
            >
              Tout refuser
            </button>
            <button
              className="button button-outline"
              onClick={() => save(true, true)}
            >
              Tout accepter
            </button>
            <button
              className="text-button"
              onClick={() => save(analytics, advertising)}
            >
              Enregistrer mes choix
            </button>
          </>
        ) : (
          <button
            className="button button-outline"
            onClick={() => setVisible(false)}
          >
            Fermer
          </button>
        )}
        <a href="/confidentialite">En savoir plus</a>
      </div>
    </section>
  );
}
