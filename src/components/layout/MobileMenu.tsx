"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      <div
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-glass-border">
          <Image
                src="/images/logo-slogan-black-c.png"
                alt="MyFitScan"
                width={120}
                height={34}
                className="h-8 w-auto object-contain"
              />
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-text-secondary"
            aria-label="Fermer le menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-text-secondary hover:bg-hero-from hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-glass-border">
            <Link
              href="#"
              onClick={onClose}
              className="block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Télécharger l&apos;app
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
