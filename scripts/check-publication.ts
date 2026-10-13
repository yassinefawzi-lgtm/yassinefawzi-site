import fs from "node:fs";
import { site } from "../src/content/site";
import { contactConfigured } from "../src/lib/contact";
const checks = [
  [
    "Photo fournie",
    Boolean(site.photo && fs.existsSync(`public${site.photo}`)),
  ],
  [
    "CV PDF fourni",
    Boolean(site.cvPdf && fs.existsSync(`public${site.cvPdf}`)),
  ],
  ["Coordonnées directes", Boolean(site.email || site.linkedin)],
  ["Formulaire configuré", contactConfigured()],
];
for (const [label, ok] of checks)
  console.log(`${ok ? "OK" : "À COMPLÉTER"} — ${label}`);
console.log(
  "Revue humaine : domaine réel, mentions légales, confidentialité, dates, outils pratiqués, autorisations des visuels et exactitude des cas.",
);
if (checks.some(([, ok]) => !ok)) process.exitCode = 1;
