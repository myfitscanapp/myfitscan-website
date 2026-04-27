"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookieConsentProps {
  dict: {
    text: string;
    privacyLink: string;
    learnMore: string;
    accept: string;
  };
  locale: string;
}

export default function CookieConsent({ dict, locale }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white/95 backdrop-blur-md border border-glass-border shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-text-secondary flex-1">
          {dict.text}{" "}
          <Link
            href={`/${locale}/politique-de-confidentialite`}
            className="text-accent underline"
          >
            {dict.privacyLink}
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={`/${locale}/politique-de-confidentialite`}
            className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
          >
            {dict.learnMore}
          </Link>
          <button
            onClick={accept}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
          >
            {dict.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
