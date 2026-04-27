import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/landing/CTABanner";

const screenshots = [
  "/images/iphone-1-bodyscan.png",
  "/images/iphone-2-foodscan.png",
  "/images/iphone-3-mycoach.png",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.features.pageTitle,
    description: dict.features.pageDescription,
  };
}

export default async function FonctionnalitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const features = dict.features.items.map((item, i) => ({
    ...item,
    screenshotSrc: screenshots[i],
    reverse: i % 2 === 1,
  }));

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={dict.features.badge}
            title={dict.features.title}
            subtitle={dict.features.subtitle}
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
                  {feature.points.map((item) => (
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
                <Image
                  src={feature.screenshotSrc}
                  alt={feature.screenshot}
                  width={256}
                  height={520}
                  className="w-64 h-auto rounded-[28px] shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner dict={dict.home.ctaBanner} commonDict={dict.common} />
    </>
  );
}
