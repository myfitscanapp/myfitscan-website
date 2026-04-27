import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import SectionHeading from "@/components/shared/SectionHeading";
import PricingCard from "@/components/pricing/PricingCard";
import FAQ from "@/components/pricing/FAQ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.pricing.pageTitle,
    description: dict.pricing.pageDescription,
  };
}

export default async function TarifsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const plans = dict.pricing.plans;
  const comparison = dict.pricing.comparison;
  const faqItems = dict.pricing.faq;

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-hero-from to-hero-to">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={dict.pricing.badge}
            title={dict.pricing.title}
            subtitle={dict.pricing.subtitle}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {plans.map((plan, i) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={i === 1}
                trial={plan.trial}
                buttonText={dict.pricing.startButton}
                popularLabel={dict.pricing.mostPopular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={comparison.title}
            subtitle={comparison.subtitle}
          />

          <div className="mt-12 rounded-2xl border border-glass-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-hero-from">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                    {comparison.featureLabel}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">
                    {comparison.freeLabel}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent">
                    {comparison.proLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.items.map((feature, i) => (
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
          <SectionHeading title={dict.pricing.faqTitle} />
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
