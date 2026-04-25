import AppStoreButtons from "@/components/shared/AppStoreButtons";
import ScreenshotPlaceholder from "@/components/shared/ScreenshotPlaceholder";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-from to-hero-to">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-glass-border px-4 py-1.5 text-sm font-medium text-text-secondary">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              Propulsé par l&apos;intelligence artificielle
            </span>

            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] tracking-tight">
              Atteins tes objectifs.
              <br />
              <span className="text-accent">Chaque jour.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              MyFitScan combine scan corporel IA, suivi calorique photo et
              coaching personnel pour t&apos;offrir un accompagnement
              personnalisé et durable.
            </p>

            <div className="mt-8">
              <AppStoreButtons />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "bg-accent",
                  "bg-blue-400",
                  "bg-emerald-400",
                  "bg-purple-400",
                  "bg-amber-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${bg} border-2 border-white`}
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text">+100 000</span>{" "}
                utilisateurs nous font déjà confiance
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <ScreenshotPlaceholder
                label="Écran d'accueil MyFitScan"
                className="w-56 sm:w-64 h-[460px] sm:h-[520px] shadow-2xl"
              />
              <ScreenshotPlaceholder
                label="Résultats BodyScan"
                className="absolute -left-16 top-16 w-48 sm:w-56 h-[400px] sm:h-[460px] -rotate-6 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
