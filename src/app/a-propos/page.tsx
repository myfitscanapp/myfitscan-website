import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvre la mission de MyFitScan, notre vision et l'équipe derrière l'application de fitness IA.",
};

const values = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Innovation IA",
    description:
      "Nous utilisons les dernières avancées en intelligence artificielle pour offrir une expérience fitness sans précédent.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Confidentialité",
    description:
      "Tes données personnelles et tes photos sont chiffrées et protégées. Nous ne les partageons jamais à des fins publicitaires.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Accessibilité",
    description:
      "Un coaching fitness de qualité professionnelle accessible à tous, à une fraction du prix d'un coach traditionnel.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="À propos"
            title="Notre mission"
            subtitle="Rendre le coaching fitness personnalisé accessible à tous grâce à l'intelligence artificielle."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-text-secondary leading-relaxed">
              MyFitScan est né d&apos;un constat simple : le coaching fitness
              personnalisé reste un luxe inaccessible pour la plupart des gens.
              Les abonnements en salle, les nutritionnistes et les coachs
              personnels représentent un investissement considérable que peu
              peuvent se permettre.
            </p>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Grâce aux avancées de l&apos;intelligence artificielle, nous avons
              créé une application qui offre un accompagnement fitness complet,
              personnalisé et continu — pour une fraction du prix d&apos;un
              coaching traditionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nos valeurs" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white border border-glass-border p-6 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 text-accent">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="L'entreprise" />
          <div className="mt-8 rounded-2xl border border-glass-border p-6 sm:p-8">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-text-muted">
                  Raison sociale
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
                <dt className="text-sm font-medium text-text-muted">
                  Contact
                </dt>
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
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="L'équipe"
            subtitle="Une équipe passionnée par la technologie et le bien-être."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Fondateur & CEO", color: "bg-accent" },
              { name: "Lead IA Engineer", color: "bg-blue-400" },
              { name: "Head of Product", color: "bg-emerald-400" },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white border border-glass-border p-6 text-center"
              >
                <div
                  className={`mx-auto h-20 w-20 rounded-full ${member.color} bg-opacity-20 flex items-center justify-center`}
                >
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
