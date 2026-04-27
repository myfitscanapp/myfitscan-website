import Image from "next/image";
import AppStoreButtons from "@/components/shared/AppStoreButtons";

const avatars = [
  { src: "/images/pic-profil-f1.jpg", alt: "Camille" },
  { src: "/images/pic-profil-h1.jpg", alt: "Thomas" },
  { src: "/images/pic-profil-f2.jpg", alt: "Sophie" },
  { src: "/images/pic-profil-h2.png", alt: "Lucas" },
  { src: "/images/pic-profil-h3.jpg", alt: "Marc" },
];

interface HeroSectionProps {
  dict: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    usersCount: string;
    usersTrust: string;
    heroImageAlt: string;
  };
  commonDict: { downloadOn: string; availableOn: string; appStore: string; googlePlay: string };
}

export default function HeroSection({ dict, commonDict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-from to-hero-to">
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-glass-border px-4 py-1.5 text-sm font-medium text-text-secondary">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              {dict.badge}
            </span>

            <h1 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-[1.1] tracking-tight">
              {dict.titleLine1}
              <br />
              <span className="text-accent">{dict.titleLine2}</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
              {dict.description}
            </p>

            <div className="mt-8">
              <AppStoreButtons dict={commonDict} />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="relative h-9 w-9 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text">{dict.usersCount}</span>{" "}
                {dict.usersTrust}
              </p>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/design-hero-app.png"
                alt={dict.heroImageAlt}
                width={600}
                height={700}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
