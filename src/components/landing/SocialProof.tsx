"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 100000,
    suffix: "+",
    label: "Utilisateurs actifs",
    display: "100K+",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    value: 4.8,
    suffix: "",
    label: "Note App Store",
    display: "4.8",
    isDecimal: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    value: 2000000,
    suffix: "+",
    label: "Repas analyses",
    display: "2M+",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
    ),
  },
  {
    value: 500000,
    suffix: "+",
    label: "Scans realises",
    display: "500K+",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
];

function formatNumber(num: number, display: string, isDecimal?: boolean): string {
  if (isDecimal) return num.toFixed(1);
  if (display.includes("M")) return (num / 1000000).toFixed(num >= 1000000 ? 0 : 1) + "M";
  if (display.includes("K")) return Math.floor(num / 1000) + "K";
  return Math.floor(num).toLocaleString("fr-FR");
}

function CountUpStat({ stat }: { stat: (typeof stats)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = stat.value / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            if (step >= steps) {
              setCurrent(stat.value);
              clearInterval(timer);
            } else {
              // Ease-out
              const progress = step / steps;
              const eased = 1 - Math.pow(1 - progress, 3);
              setCurrent(stat.value * eased);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  const displayValue = hasAnimated
    ? formatNumber(current, stat.display, stat.isDecimal) + stat.suffix
    : "0";

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent">
        {stat.icon}
      </div>
      <p className="font-heading text-3xl sm:text-4xl font-bold text-text">
        {displayValue}
      </p>
      <p className="text-sm text-text-secondary">{stat.label}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-glass-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <CountUpStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
