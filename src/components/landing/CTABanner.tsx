import AppStoreButtons from "@/components/shared/AppStoreButtons";

export default function CTABanner() {
  return (
    <section className="bg-dark py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Prêt à changer ta vie ?
        </h2>
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Rejoins les milliers d&apos;utilisateurs qui ont déjà transformé leur
          quotidien avec MyFitScan. Essai gratuit de 3 jours.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButtons />
        </div>
      </div>
    </section>
  );
}
