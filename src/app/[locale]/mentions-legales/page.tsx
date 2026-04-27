import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import LegalPageLayout from "@/components/shared/LegalPageLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.legal.mentions.pageTitle,
    description: dict.legal.mentions.pageDescription,
    robots: { index: false },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const data = dict.legal.mentions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const d = data as any;
  const sections: { title: string; content: string }[] | undefined = d.sections;
  const content: string | undefined = d.content;

  return (
    <LegalPageLayout
      title={data.title}
      lastUpdated={data.lastUpdated}
      lastUpdatedLabel={dict.legal.lastUpdatedLabel}
    >
      {sections
        ? sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))
        : content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </LegalPageLayout>
  );
}
