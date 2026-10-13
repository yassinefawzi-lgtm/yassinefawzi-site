import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbs } from "@/lib/seo";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↗"}</span>;
}
export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      {children && <div className="intro-copy">{children}</div>}
    </header>
  );
}
export function Breadcrumb({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <>
      <nav aria-label="Fil d’Ariane" className="breadcrumbs">
        <Link href="/">Accueil</Link>
        {items.map((item, index) => (
          <span key={item.path}>
            <span aria-hidden="true"> / </span>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbs(items)} />
    </>
  );
}
export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div>
        <Eyebrow>Et si on en parlait ?</Eyebrow>
        <h2>
          Un besoin concret.
          <br />
          <em>Une conversation pour commencer.</em>
        </h2>
      </div>
      <Link href="/contact" className="button button-light">
        Me contacter <Arrow />
      </Link>
    </section>
  );
}
