"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

const AUTOPLAY_INTERVAL = 5000;

const featureData = [
  {
    id: "bodyscan",
    image: "/images/iphone-1-bodyscan.png",
    tall: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    id: "foodscan",
    image: "/images/iphone-2-foodscan.png",
    tall: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    id: "coach",
    image: "/images/iphone-3-mycoach.png",
    tall: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    id: "calendar",
    image: "/images/iphone-4-calendar_suivi.png",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

interface FeatureTabsProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: { title: string; description: string }[];
  };
}

export default function FeatureTabs({ dict }: FeatureTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const features = featureData.map((f, i) => ({
    ...f,
    title: dict.tabs[i].title,
    description: dict.tabs[i].description,
  }));

  const goToTab = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    // Progress bar update (every 50ms)
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (50 / AUTOPLAY_INTERVAL) * 100;
      });
    }, 50);

    // Tab switch
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPaused, activeIndex, features.length]);

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-hero-from to-hero-to">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            badge={dict.badge}
            title={dict.title}
            subtitle={dict.subtitle}
          />
        </AnimateOnScroll>

        <div
          className="mt-8 sm:mt-16 flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left - Tabs */}
          <AnimateOnScroll>
            <div className="space-y-2">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={feature.id}
                    onClick={() => goToTab(index)}
                    className={`w-full text-left rounded-2xl border transition-colors duration-300 ${
                      isActive
                        ? "bg-white border-accent/20 shadow-lg"
                        : "bg-white/50 border-glass-border hover:bg-white/80"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5">
                      <div
                        className={`flex-shrink-0 inline-flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-xl transition-colors duration-300 ${
                          isActive
                            ? "bg-accent/10 text-accent"
                            : "bg-gray-100 text-text-secondary"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-sm sm:text-base font-bold text-text">
                          {feature.title}
                        </h3>
                      </div>
                      <svg
                        className={`h-5 w-5 text-text-muted transition-transform duration-300 flex-shrink-0 ${
                          isActive ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>

                    {/* Expanded content — conditional render for instant collapse */}
                    {isActive && (
                      <div className="animate-[fadeIn_0.25s_ease-out] px-3 pb-3 sm:px-5 sm:pb-5">
                        <div className="flex gap-3 items-start">
                          <p className="text-sm text-text-secondary leading-relaxed flex-1">
                            {feature.description}
                          </p>
                          {/* Mobile inline screenshot */}
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={100}
                            height={200}
                            className="lg:hidden w-16 h-auto rounded-xl shadow-md flex-shrink-0"
                          />
                        </div>
                        {/* Progress bar */}
                        <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </AnimateOnScroll>

          {/* Right - iPhone screenshot (desktop only) */}
          <AnimateOnScroll delay={200} className="hidden lg:flex justify-center items-center">
            <div className="relative flex items-center justify-center" style={{ width: 400, height: 580 }}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    index === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={feature.tall ? 260 : 400}
                    height={580}
                    className={`h-auto rounded-3xl object-contain ${
                      feature.tall ? "max-h-[580px] w-auto" : "max-h-[580px] w-auto"
                    }`}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
