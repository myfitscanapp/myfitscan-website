import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Devenir Ambassadeur",
  description:
    "Rejoins le programme ambassadeur MyFitScan. Deviens créateur de contenu affilié et gagne des commissions en partageant une app qui change des vies.",
};

const benefits = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Commissions attractives",
    description:
      "Gagne jusqu'à 20% de commission récurrente sur chaque abonnement généré via ton lien unique.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Accès premium gratuit",
    description:
      "Profite d'un accès gratuit à toutes les fonctionnalités premium de MyFitScan tant que tu es ambassadeur.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Dashboard dédié",
    description:
      "Suis tes performances en temps réel : clics, conversions, revenus. Tout dans un tableau de bord clair.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
    title: "Kit créateur complet",
    description:
      "Reçois des visuels, templates de contenu et guidelines prêts à l'emploi pour tes réseaux sociaux.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Communauté exclusive",
    description:
      "Rejoins un groupe privé d'ambassadeurs pour échanger, collaborer et accéder à des opportunités exclusives.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Paiements flexibles",
    description:
      "Retrait par virement ou PayPal dès 50 EUR atteints. Paiements mensuels automatiques et transparents.",
  },
];

const steps = [
  {
    number: "01",
    title: "Postule en ligne",
    description:
      "Remplis le formulaire de candidature avec tes infos et liens vers tes réseaux sociaux.",
  },
  {
    number: "02",
    title: "Validation rapide",
    description:
      "Notre équipe examine ta candidature sous 48h et t'envoie ta réponse par email.",
  },
  {
    number: "03",
    title: "Reçois ton kit",
    description:
      "Accès premium gratuit, lien d'affiliation unique, visuels et guidelines de création.",
  },
  {
    number: "04",
    title: "Crée & gagne",
    description:
      "Partage MyFitScan sur tes réseaux et gagne des commissions sur chaque abonnement.",
  },
];

const faq = [
  {
    q: "Qui peut devenir ambassadeur ?",
    a: "Tout créateur de contenu dans les domaines fitness, nutrition, lifestyle ou bien-être avec une communauté engagée (pas de minimum de followers).",
  },
  {
    q: "Combien puis-je gagner ?",
    a: "Tu gagnes 20% de commission récurrente sur chaque abonnement généré. Certains ambassadeurs gagnent plus de 2 000 EUR/mois.",
  },
  {
    q: "Comment fonctionne le suivi ?",
    a: "Chaque ambassadeur reçoit un lien et un code promo uniques. Toutes les conversions sont trackées automatiquement dans ton dashboard.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Aucun engagement minimum. Tu peux quitter le programme à tout moment. Tant que tu restes actif, tu conserves ton accès premium gratuit.",
  },
  {
    q: "Quand suis-je payé ?",
    a: "Les paiements sont effectués le 1er de chaque mois pour les commissions du mois précédent, dès que tu atteins 50 EUR de seuil.",
  },
];

export default function AmbassadeurPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-from to-hero-to py-20 sm:py-28">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
                Programme Ambassadeur
              </span>

              <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] tracking-tight">
                Deviens ambassadeur{" "}
                <span className="text-accent">MyFitScan</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
                Partage une app qui transforme des vies et gagne des revenus
                récurrents. Rejoins notre communauté de créateurs de contenu
                fitness et bien-être.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:ambassadeur@myfitscan.com?subject=Candidature%20Ambassadeur%20MyFitScan"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,92,0.4)]"
                >
                  Postuler maintenant
                </a>
                <Link
                  href="#comment-ca-marche"
                  className="inline-flex items-center justify-center rounded-full border border-glass-border bg-white px-8 py-3.5 text-base font-medium text-text hover:bg-gray-50 transition-colors"
                >
                  En savoir plus
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  20% de commission
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Accès premium offert
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <svg className="h-5 w-5 text-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Sans engagement
                </span>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <Image
                  src="/images/myfitscangroup-background-1.jpg"
                  alt="Communauté MyFitScan"
                  width={560}
                  height={400}
                  className="rounded-3xl object-cover"
                />
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white border border-glass-border p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[
                        "/images/pic-profil-f1.jpg",
                        "/images/pic-profil-h1.jpg",
                        "/images/pic-profil-f2.jpg",
                      ].map((src, i) => (
                        <div key={i} className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                          <Image src={src} alt="" fill className="object-cover" sizes="32px" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">+200 ambassadeurs</p>
                      <p className="text-xs text-text-secondary">actifs dans le monde</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Avantages"
            title="Pourquoi devenir ambassadeur ?"
            subtitle="Des avantages concrets pour les créateurs de contenu qui partagent MyFitScan."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl bg-white border border-glass-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="comment-ca-marche" className="py-20 sm:py-28 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Processus"
            title="Comment ça marche ?"
            subtitle="4 étapes simples pour commencer à gagner de l'argent avec MyFitScan."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -translate-x-4" />
                )}
                <div className="rounded-2xl bg-white border border-glass-border p-6">
                  <span className="font-heading text-3xl font-bold text-accent/20">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Questions fréquentes"
          />

          <div className="mt-12 space-y-4">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-glass-border bg-white p-6"
              >
                <h3 className="font-heading text-base font-bold text-text">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Prêt à rejoindre l&apos;aventure ?
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Envoie ta candidature et rejoins une communauté de créateurs qui
            partagent une app qui change des vies.
          </p>
          <div className="mt-8">
            <a
              href="mailto:ambassadeur@myfitscan.com?subject=Candidature%20Ambassadeur%20MyFitScan"
              className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,92,0.4)]"
            >
              Postuler maintenant
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Ou envoie un email à{" "}
            <a href="mailto:ambassadeur@myfitscan.com" className="text-accent hover:underline">
              ambassadeur@myfitscan.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
