import SectionHeading from "@/components/shared/SectionHeading";
import ScreenshotPlaceholder from "@/components/shared/ScreenshotPlaceholder";

export default function AllInOneSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-hero-from to-hero-to">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              badge="Tout-en-un"
              title="Tout ce dont tu as besoin pour réussir"
              centered={false}
            />
            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Plan alimentaire personnalisé",
                  desc: "Généré par l'IA en fonction de tes objectifs, ta morphologie et tes préférences alimentaires.",
                },
                {
                  title: "Suivi calorique par photo",
                  desc: "Prends une photo de ton repas et obtiens instantanément les calories et macros.",
                },
                {
                  title: "Coaching en temps réel",
                  desc: "Pose tes questions à ton coach IA disponible 24h/24, 7j/7.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-success"
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
                  </div>
                  <div>
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <ScreenshotPlaceholder
              label="Plan alimentaire"
              className="w-44 sm:w-52 h-[380px] sm:h-[440px]"
            />
            <ScreenshotPlaceholder
              label="Coach Chat"
              className="w-44 sm:w-52 h-[380px] sm:h-[440px] mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
