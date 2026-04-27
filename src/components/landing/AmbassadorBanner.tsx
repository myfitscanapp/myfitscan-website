import Link from "next/link";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function AmbassadorBanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-hero-from to-hero-to">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="rounded-3xl bg-white border border-glass-border p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              Programme Ambassadeur
            </span>

            <h2 className="mt-5 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text leading-tight">
              Deviens créateur de contenu affilié
            </h2>

            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Partage MyFitScan avec ta communauté et gagne{" "}
              <span className="font-semibold text-accent">20% de commission</span>{" "}
              sur chaque abonnement. Accès premium offert, kit créateur inclus.
            </p>

            <div className="mt-8">
              <Link
                href="/ambassadeur"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,92,0.4)]"
              >
                Rejoindre le programme
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
