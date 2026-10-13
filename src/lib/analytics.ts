export type Consent = {
  version: 1;
  analytics: boolean;
  advertising: boolean;
  at: number;
};
export const CONSENT_KEY = "yf-consent-v1";
export const CONSENT_DURATION = 1000 * 60 * 60 * 24 * 180;
type Events = {
  cta_click: { label: string; destination: string };
  project_view: { project_slug: string };
  contact_form_submit: { intent: "recrutement" | "prestation" | "autre" };
  cv_download: { source: string };
  outbound_link_click: { network: string };
};
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
export function parseConsent(
  value: string | null,
  now = Date.now(),
): Consent | null {
  try {
    const c = JSON.parse(value || "null");
    return c?.version === 1 &&
      typeof c.analytics === "boolean" &&
      typeof c.advertising === "boolean" &&
      typeof c.at === "number" &&
      c.at <= now &&
      now - c.at < CONSENT_DURATION
      ? (c as Consent)
      : null;
  } catch {
    return null;
  }
}
export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    return parseConsent(localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}
export function track<E extends keyof Events>(event: E, properties: Events[E]) {
  const consent = getConsent();
  if (!consent?.analytics) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...properties });
}
// Identifiants de campagnes fermés : aucune query-string libre ni donnée personnelle envoyée.
const knownSources = new Set([
  "google",
  "linkedin",
  "newsletter",
  "bing",
  "meta",
]);
const knownMediums = new Set(["cpc", "organic", "email", "social", "referral"]);
export const campaigns = new Set(["portfolio-launch"]);
export function safeAttribution(search: string) {
  const params = new URLSearchParams(search);
  const result: Record<string, string> = {};
  const source = params.get("utm_source") || "";
  const medium = params.get("utm_medium") || "";
  const campaign = params.get("utm_campaign") || "";
  if (knownSources.has(source)) result.utm_source = source;
  if (knownMediums.has(medium)) result.utm_medium = medium;
  if (campaigns.has(campaign)) result.utm_campaign = campaign;
  return result;
}
