import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import ScreenshotPlaceholder from "@/components/shared/ScreenshotPlaceholder";
import CTABanner from "@/components/landing/CTABanner";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvre toutes les fonctionnalités de MyFitScan : scan corporel IA, suivi calorique photo et coaching personnel 24/7.",
};

const features = [
  {
    badge: "BodyScan AI",
    title: "Analyse ton corps avec précision",
    description:
      "Prends simplement 2 photos — face et profil — et notre IA analyse ta composition corporelle en détail. Reçois un score global, un commentaire de coaching, un plan alimentaire personnalisé et des recommandations adaptées à tes objectifs.",
    items: [
      "Analyse complète en quelques secondes",
      "Score global de composition corporelle",
      "Commentaire de coaching personnalisé",
      "Plan alimentaire sur mesure",
      "Recommandations d'exercices adaptées",
      "Suivi de progression sur 14 jours",
    ],
    screenshot: "Résultats BodyScan AI",
    reverse: false,
  },
  {
    badge: "FoodScan",
    title: "Scanne tes repas en un clic",
    description:
      "Prends une photo de ton assiette et notre IA identifie instantanément les aliments, calcule les calories et détaille les macronutriments. Plus besoin de tout saisir manuellement.",
    items: [
      "Reconnaissance IA des aliments",
      "Calcul automatique des calories",
      "Détail des macronutriments (protéines, glucides, lipides)",
      "Historique de tes repas",
      "Analyse des tendances alimentaires",
    ],
    screenshot: "Analyse FoodScan",
    reverse: true,
  },
  {
    badge: "MyCoach AI",
    title: "Ton coach disponible 24h/24",
    description:
      "Pose tes questions à ton coach IA personnel, disponible à tout moment. Il connaît ton profil, tes objectifs et ton historique pour te donner des conseils vraiment personnalisés, en temps réel.",
    items: [
      "Chat en temps réel avec streaming",
      "Conseils personnalisés selon ton profil",
      "Suggestions de repas et d'exercices",
      "Motivation et suivi des habitudes",
      "Actions rapides intégrées",
    ],
    screenshot: "Coach Chat IA",
    reverse: false,
  },
];

export default function FonctionnalitesPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Fonctionnalités"
            title="Des outils puissants pour des résultats concrets"
            subtitle="Chaque fonctionnalité a été pensée pour t'offrir l'expérience fitness la plus complète et la plus simple possible."
          />
        </div>
      </section>

      {features.map((feature, index) => (
        <section
          key={feature.badge}
          className={`py-20 sm:py-28 ${index % 2 === 1 ? "bg-gradient-to-br from-hero-from to-hero-to" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={feature.reverse ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  {feature.badge}
                </span>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-text leading-tight">
                  {feature.title}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 text-success flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`flex justify-center ${
                  feature.reverse ? "lg:order-1" : ""
                }`}
              >
                <ScreenshotPlaceholder
                  label={feature.screenshot}
                  className="w-64 h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
