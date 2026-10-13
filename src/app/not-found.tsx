import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>
        404<span aria-hidden="true">.</span>
      </h1>
      <h2>Cette piste ne mène nulle part.</h2>
      <p>
        La page a peut-être changé d’adresse. Retrouvez les projets ou revenez
        au point de départ.
      </p>
      <div className="button-row">
        <Link href="/" className="button">
          Retour à l’accueil ↗
        </Link>
        <Link href="/projets" className="button button-outline">
          Explorer les projets ↗
        </Link>
      </div>
    </div>
  );
}
