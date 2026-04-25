import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQ from "@/components/pricing/FAQ";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Besoin d'aide avec MyFitScan ? Contacte notre équipe support ou consulte notre FAQ.",
};

const faqItems = [
  {
    question: "Comment créer un compte MyFitScan ?",
    answer:
      "Télécharge l'application depuis l'App Store ou Google Play, puis suis les étapes d'inscription. Tu peux t'inscrire avec ton email ou ton compte Apple/Google.",
  },
  {
    question: "Le scan corporel est-il fiable ?",
    answer:
      "Notre technologie de scan corporel utilise des modèles d'IA avancés pour fournir une analyse précise. Pour de meilleurs résultats, suis les instructions de pose et assure-toi d'être dans un environnement bien éclairé.",
  },
  {
    question: "Comment fonctionne l'analyse des repas ?",
    answer:
      "Prends simplement une photo de ton repas et notre IA identifie automatiquement les aliments présents, calcule les calories et détaille les macronutriments. Plus ton utilisation est régulière, plus l'IA s'améliore.",
  },
  {
    question: "Puis-je utiliser MyFitScan sans abonnement ?",
    answer:
      "Oui ! La version gratuite te permet de réaliser un scan corporel et de découvrir l'application. Pour accéder à toutes les fonctionnalités (scans illimités, analyse de repas, coach IA), un abonnement Pro est nécessaire.",
  },
  {
    question: "Comment supprimer mon compte ?",
    answer:
      "Tu peux supprimer ton compte depuis les paramètres de l'application, section « Mon compte ». Si tu rencontres des difficultés, contacte-nous à support@myfitscan.com et nous traiterons ta demande sous 48h.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Support"
            title="Comment pouvons-nous t'aider ?"
            subtitle="Notre équipe est là pour répondre à toutes tes questions."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-glass-border p-6 sm:p-8">
            <h2 className="font-heading text-xl font-bold text-text">
              Contacte-nous
            </h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-text-muted">
                  Entreprise
                </dt>
                <dd className="mt-1 text-text">DMC Digital LLC</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-muted">
                  Adresse
                </dt>
                <dd className="mt-1 text-text">
                  4405 Jager Dr NE Ste C4-4456, Rio Rancho, NM 87144, USA
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:support@myfitscan.com"
                    className="text-accent hover:underline"
                  >
                    support@myfitscan.com
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <a
                href="mailto:support@myfitscan.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Envoyer un email
              </a>
            </div>
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
