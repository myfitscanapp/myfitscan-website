import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import PricingCard from "@/components/pricing/PricingCard";
import FAQ from "@/components/pricing/FAQ";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Découvre les formules MyFitScan : essai gratuit, abonnement hebdomadaire, mensuel ou annuel. Toutes les fonctionnalités IA incluses.",
};

const plans = [
  {
    name: "Hebdomadaire",
    price: "4,99 €",
    period: "semaine",
    description: "Idéal pour tester sans engagement.",
    features: [
      "Scan corporel IA illimité",
      "Analyse photo des repas",
      "Coach IA 24/7",
      "Plan alimentaire personnalisé",
      "Suivi de progression",
    ],
  },
  {
    name: "Annuel",
    price: "49,99 €",
    period: "an",
    description: "Le meilleur rapport qualité-prix.",
    popular: true,
    trial: "Essai gratuit de 3 jours",
    features: [
      "Toutes les fonctionnalités Pro",
      "Économise plus de 80%",
      "Scan corporel IA illimité",
      "Analyse photo des repas",
      "Coach IA 24/7",
      "Plan alimentaire personnalisé",
      "Suivi de progression",
    ],
  },
  {
    name: "Mensuel",
    price: "9,99 €",
    period: "mois",
    description: "Flexibilité totale, sans engagement.",
    features: [
      "Scan corporel IA illimité",
      "Analyse photo des repas",
      "Coach IA 24/7",
      "Plan alimentaire personnalisé",
      "Suivi de progression",
    ],
  },
];

const comparisonFeatures = [
  { name: "Scan corporel IA", free: "1 scan", pro: "Illimité" },
  { name: "Analyse photo repas", free: false, pro: true },
  { name: "Coach IA 24/7", free: false, pro: true },
  { name: "Plan alimentaire", free: false, pro: true },
  { name: "Suivi de progression", free: "Basique", pro: "Complet" },
  { name: "Historique des scans", free: "Dernier scan", pro: "Complet" },
];

const faqItems = [
  {
    question: "Comment fonctionne l'essai gratuit ?",
    answer:
      "L'essai gratuit de 3 jours te donne accès à toutes les fonctionnalités Pro sans aucun engagement. Tu peux annuler à tout moment pendant la période d'essai et tu ne seras pas facturé.",
  },
  {
    question: "Puis-je changer de formule ?",
    answer:
      "Oui, tu peux changer de formule à tout moment depuis les paramètres de ton compte. Le changement prendra effet à la fin de ta période de facturation en cours.",
  },
  {
    question: "Comment annuler mon abonnement ?",
    answer:
      "Tu peux annuler ton abonnement directement depuis l'App Store (iOS) ou Google Play Store (Android) dans les paramètres de ton appareil. L'accès Pro restera actif jusqu'à la fin de la période payée.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer:
      "Absolument. Tes données sont chiffrées et stockées de manière sécurisée. Nous ne partageons jamais tes données personnelles avec des tiers à des fins publicitaires. Consulte notre politique de confidentialité pour plus de détails.",
  },
  {
    question: "Puis-je obtenir un remboursement ?",
    answer:
      "Les remboursements sont gérés par l'App Store ou le Google Play Store selon leurs politiques respectives. Si tu rencontres un problème, contacte notre support et nous ferons notre possible pour t'aider.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tarifs"
            title="Investis dans ta santé"
            subtitle="Choisis la formule qui te convient. Toutes les fonctionnalités IA incluses dans chaque abonnement."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Gratuit vs Pro"
            subtitle="Compare les fonctionnalités disponibles dans chaque version."
          />

          <div className="mt-12 rounded-2xl border border-glass-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-hero-from">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                    Fonctionnalité
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">
                    Gratuit
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr
                    key={feature.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-hero-from/50"}
                  >
                    <td className="px-6 py-3 text-sm text-text">
                      {feature.name}
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      {typeof feature.free === "boolean" ? (
                        feature.free ? (
                          <svg className="h-5 w-5 text-success mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-text-muted mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-text-secondary">{feature.free}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center text-sm">
                      {typeof feature.pro === "boolean" ? (
                        <svg className="h-5 w-5 text-success mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      ) : (
                        <span className="font-medium text-accent">{feature.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Questions fréquentes" />
          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
