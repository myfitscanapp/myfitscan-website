import type { Locale } from "./config";

const dictionaries = {
  fr: () => import("./locales/fr").then((m) => m.default),
  en: () => import("./locales/en").then((m) => m.default),
  de: () => import("./locales/de").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
