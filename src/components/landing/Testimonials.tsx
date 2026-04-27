import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const testimonials = [
  {
    name: "Camille R.",
    result: "-12 kg en 4 mois",
    quote:
      "MyFitScan a completement change ma facon de voir la nutrition. Le scan corporel m'a ouvert les yeux et le coach IA me motive chaque jour. Je n'ai jamais ete aussi fiere de moi !",
    avatar: "/images/pic-profil-f1.jpg",
  },
  {
    name: "Thomas L.",
    result: "+8 kg de muscle",
    quote:
      "En tant que sportif, j'avais besoin d'un suivi precis. L'analyse photo des repas me fait gagner un temps fou et le plan alimentaire est parfaitement adapte a mes objectifs.",
    avatar: "/images/pic-profil-h1.jpg",
  },
  {
    name: "Sophie M.",
    result: "Energie +50%",
    quote:
      "Je ne cherchais pas a perdre du poids, juste a mieux manger. Le coach IA comprend vraiment mes besoins et me donne des conseils que meme mon nutritionniste n'avait pas suggeres.",
    avatar: "/images/pic-profil-f2.jpg",
  },
  {
    name: "Lucas D.",
    result: "-15 kg en 6 mois",
    quote:
      "L'app est devenue mon alliee au quotidien. Le suivi par photo est bluffant de precision, et le calendrier me permet de rester motive en voyant mes progres semaine apres semaine.",
    avatar: "/images/pic-profil-h2.png",
  },
  {
    name: "Marc P.",
    result: "Transformation totale",
    quote:
      "Apres des annees a tester des regimes sans resultats, MyFitScan m'a enfin donne une approche complete et durable. Le bodyscan tous les 14 jours, c'est ma meilleure motivation.",
    avatar: "/images/pic-profil-h3.jpg",
  },
];

function VerifiedBadge() {
  return (
    <svg className="h-4 w-4 text-green" viewBox="0 0 20 20" fill="currentColor" aria-label="Verifie">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            badge="Temoignages"
            title="Ils ont transforme leur vie"
            subtitle="Decouvre les resultats de ceux qui ont fait confiance a MyFitScan."
          />
        </AnimateOnScroll>

        {/* Desktop grid / Mobile horizontal carousel */}
        <div className="mt-16 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:overflow-x-visible">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <div className="min-w-[280px] sm:min-w-0 snap-center flex-shrink-0 sm:flex-shrink rounded-2xl bg-white border border-glass-border p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-accent/20 flex-shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-text">{t.name}</p>
                        <VerifiedBadge />
                      </div>
                      <p className="text-sm font-medium text-accent">
                        {t.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="h-4 w-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
