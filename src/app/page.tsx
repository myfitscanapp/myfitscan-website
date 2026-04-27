import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import FeatureTabs from "@/components/landing/FeatureTabs";
import Testimonials from "@/components/landing/Testimonials";
import CTABanner from "@/components/landing/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <FeatureTabs />
      <Testimonials />
      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MyFitScan",
            operatingSystem: "iOS, Android",
            applicationCategory: "HealthApplication",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "49.99",
              priceCurrency: "EUR",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "12500",
            },
            description:
              "MyFitScan combine scan corporel IA, suivi calorique photo et coaching personnel pour un accompagnement personnalise et durable.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DMC Digital LLC",
            url: "https://myfitscan.com",
            logo: "https://myfitscan.com/favicon.ico",
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@myfitscan.com",
              contactType: "customer service",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "4405 Jager Dr NE Ste C4-4456",
              addressLocality: "Rio Rancho",
              addressRegion: "NM",
              postalCode: "87144",
              addressCountry: "US",
            },
          }),
        }}
      />
    </>
  );
}
