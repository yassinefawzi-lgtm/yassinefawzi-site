import Link from "next/link";
import { site } from "@/content/site";
import { CookiePreferencesButton } from "./consent";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-name">
          Yassine Fawzi<span>PORTFOLIO & GROWTH LAB</span>
        </Link>
        <p>
          Marketing, automatisation & IA.
          <br />
          Des idées qui prennent forme.
        </p>
        <div>
          <Link href="/cv">Mon CV ↗</Link>
          <Link href="/contact">Me contacter ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <CookiePreferencesButton />
        </div>
      </div>
    </footer>
  );
}
