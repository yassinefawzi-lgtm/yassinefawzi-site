"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="container not-found">
      <h1>Oups.</h1>
      <h2>Le chargement a rencontré un problème.</h2>
      <p>
        Vous pouvez réessayer. Aucune donnée de formulaire n’a été
        automatiquement renvoyée.
      </p>
      <button className="button" onClick={reset}>
        Réessayer
      </button>
    </div>
  );
}
