"use client";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";
export function TrackedLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("cta_click", { label, destination: href })}
    >
      {children}
    </Link>
  );
}
export function ProjectView({ slug }: { slug: string }) {
  useEffect(() => {
    track("project_view", { project_slug: slug });
  }, [slug]);
  return null;
}
export function ShareButton({ title }: { title: string }) {
  const [message, setMessage] = useState("");
  return (
    <div className="share-action">
      <button
        type="button"
        className="text-button"
        onClick={async () => {
          try {
            if (navigator.share)
              await navigator.share({ title, url: location.href });
            else {
              await navigator.clipboard.writeText(location.href);
              setMessage("Lien copié.");
            }
          } catch {
            setMessage(
              "Partage annulé ou indisponible. Vous pouvez copier l’adresse de cette page.",
            );
          }
        }}
      >
        Partager cette étude ↗
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
export function PrintButton() {
  return (
    <button
      type="button"
      className="button button-outline"
      onClick={() => window.print()}
    >
      Imprimer le CV ↗
    </button>
  );
}
export function CvDownload({ href }: { href: string }) {
  return (
    <a
      className="button"
      href={href}
      download
      onClick={() => track("cv_download", { source: "cv" })}
    >
      Télécharger le CV PDF ↓
    </a>
  );
}
export function ExternalLink({
  href,
  label,
  network,
}: {
  href: string;
  label: string;
  network: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("outbound_link_click", { network })}
    >
      {label} ↗
    </a>
  );
}
