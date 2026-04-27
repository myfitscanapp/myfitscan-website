import Image from "next/image";
import AppStoreButtons from "@/components/shared/AppStoreButtons";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

interface CTABannerProps {
  dict: {
    title: string;
    description: string;
  };
  commonDict: { downloadOn: string; availableOn: string; appStore: string; googlePlay: string };
}

export default function CTABanner({ dict, commonDict }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/myfitscangroup-background-1.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80" />
      </div>

      {/* Gradient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            {dict.description}
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButtons dict={commonDict} />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
