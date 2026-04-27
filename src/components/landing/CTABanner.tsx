import AppStoreButtons from "@/components/shared/AppStoreButtons";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 sm:py-28">
      {/* Gradient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pret a changer ta vie ?
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Rejoins les milliers d&apos;utilisateurs qui ont deja transforme leur
            quotidien avec MyFitScan. Essai gratuit de 3 jours.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButtons />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
