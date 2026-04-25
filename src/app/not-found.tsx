import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center px-4">
        <p className="text-7xl font-heading font-bold text-accent">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text">
          Page introuvable
        </h1>
        <p className="mt-2 text-text-secondary">
          La page que tu cherches n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-white hover:bg-dark-secondary transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
