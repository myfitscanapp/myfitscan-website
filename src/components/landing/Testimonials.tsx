import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Camille R.",
    result: "-12 kg en 4 mois",
    quote:
      "MyFitScan a complètement changé ma façon de voir la nutrition. Le scan corporel m'a ouvert les yeux et le coach IA me motive chaque jour. Je n'ai jamais été aussi fière de moi !",
    avatar: "bg-pink-400",
  },
  {
    name: "Thomas L.",
    result: "+8 kg de muscle",
    quote:
      "En tant que sportif, j'avais besoin d'un suivi précis. L'analyse photo des repas me fait gagner un temps fou et le plan alimentaire est parfaitement adapté à mes objectifs.",
    avatar: "bg-blue-400",
  },
  {
    name: "Sophie M.",
    result: "Énergie +50%",
    quote:
      "Je ne cherchais pas à perdre du poids, juste à mieux manger. Le coach IA comprend vraiment mes besoins et me donne des conseils que même mon nutritionniste n'avait pas suggérés.",
    avatar: "bg-emerald-400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Témoignages"
          title="Ils ont transformé leur vie"
          subtitle="Découvre les résultats de ceux qui ont fait confiance à MyFitScan."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white border border-glass-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${t.avatar} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-text">{t.name}</p>
                  <p className="text-sm font-medium text-accent">{t.result}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
}
