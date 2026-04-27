import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  lastUpdatedLabel?: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  lastUpdatedLabel,
  children,
}: LegalPageLayoutProps) {
  const label = lastUpdatedLabel ?? "Dernière mise à jour";

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text">
          {title}
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          {label} : {lastUpdated}
        </p>
        <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-secondary [&_ul]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
          {children}
        </div>
      </div>
    </div>
  );
}
