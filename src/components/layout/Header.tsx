"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

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
              {/* Language switcher */}
              <div className="flex items-center gap-1 text-xs text-text-muted">
                {(["fr", "en", "de"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      l === locale
                        ? "bg-accent/10 text-accent font-semibold"
                        : "hover:text-text"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
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
