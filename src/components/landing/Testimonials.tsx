import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const avatarImages = [
  "/images/pic-profil-f1.jpg",
  "/images/pic-profil-h1.jpg",
  "/images/pic-profil-f2.jpg",
  "/images/pic-profil-h2.png",
  "/images/pic-profil-h3.jpg",
];

interface TestimonialsProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    items: { name: string; result: string; quote: string }[];
    ctaText: string;
    ctaButton: string;
  };
  locale: string;
}

function VerifiedBadge() {
  return (
    <svg className="h-4 w-4 text-green" viewBox="0 0 20 20" fill="currentColor" aria-label="Verified">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Testimonials({ dict, locale }: TestimonialsProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            badge={dict.badge}
            title={dict.title}
            subtitle={dict.subtitle}
          />
        </AnimateOnScroll>

        {/* Desktop grid / Mobile horizontal carousel */}
        <div className="mt-16 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:overflow-x-visible">
            {dict.items.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                {/* Outer wrapper with animated gradient border */}
                <div className="min-w-[280px] sm:min-w-0 snap-center flex-shrink-0 sm:flex-shrink rounded-2xl p-[2px] bg-gradient-to-br from-accent/30 via-green/20 to-accent/30 animate-gradient-shift h-full">
                  <div className="rounded-2xl bg-white p-6 h-full">
                    <div className="flex items-center gap-3">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-accent/20 flex-shrink-0">
                        <Image
                          src={avatarImages[i] || avatarImages[0]}
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
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA Ambassadeur */}
        <AnimateOnScroll>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">
              {dict.ctaText}
            </p>
            <Link
              href={`/${locale}/ambassadeur`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,92,0.4)]"
            >
              {dict.ctaButton}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
