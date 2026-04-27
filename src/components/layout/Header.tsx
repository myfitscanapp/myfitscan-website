"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";

const localeConfig = {
  fr: { flag: "\u{1F1EB}\u{1F1F7}", label: "Fran\u00e7ais", short: "FR" },
  en: { flag: "\u{1F1EC}\u{1F1E7}", label: "English", short: "EN" },
  de: { flag: "\u{1F1E9}\u{1F1EA}", label: "Deutsch", short: "DE" },
} as const;

interface HeaderProps {
  dict: {
    navLinks: { href: string; label: string }[];
    cta: string;
    openMenu: string;
    marqueeItems: string[];
  };
  locale: string;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const localizedLinks = dict.navLinks.map((link) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on click outside
  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [langOpen]);

  const switchLocale = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    const path = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path || `/${newLocale}`;
  };

  return (
    <>
      {/* Animated top bar */}
      <div className="bg-dark text-white text-xs overflow-hidden relative z-50">
        <div className="animate-marquee flex whitespace-nowrap py-2">
          {[...dict.marqueeItems, ...dict.marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-glass-border transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14" : "h-16"
            }`}
          >
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image
                src="/images/logo-slogan-black-c.png"
                alt="MyFitScan"
                width={140}
                height={40}
                className={`transition-all duration-300 object-contain ${
                  scrolled ? "h-8 w-auto" : "h-10 w-auto"
                }`}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {localizedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* Language dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                >
                  <span className="text-base leading-none">{localeConfig[locale as keyof typeof localeConfig].flag}</span>
                  <span className="font-medium text-text-secondary">{localeConfig[locale as keyof typeof localeConfig].short}</span>
                  <svg
                    className={`h-3.5 w-3.5 text-text-muted transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-40 bg-white rounded-xl shadow-lg border border-glass-border py-1 animate-[fadeIn_0.15s_ease-out]">
                    {(["fr", "en", "de"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => { switchLocale(l); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-gray-50 ${
                          l === locale ? "text-accent font-semibold" : "text-text-secondary"
                        }`}
                      >
                        <span className="text-base leading-none">{localeConfig[l].flag}</span>
                        <span>{localeConfig[l].label}</span>
                        {l === locale && (
                          <svg className="h-4 w-4 ml-auto text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="#"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,122,92,0.4)]"
              >
                {dict.cta}
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-text"
              onClick={() => setMobileOpen(true)}
              aria-label={dict.openMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={localizedLinks}
        cta={dict.cta}
        locale={locale}
        onSwitchLocale={switchLocale}
      />
    </>
  );
}
