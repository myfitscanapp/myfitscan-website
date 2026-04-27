import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myfitscan.com";
  const locales = ["fr", "en", "de"];
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/fonctionnalites", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tarifs", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/a-propos", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/support", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/ambassadeur", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/mentions-legales", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/politique-de-confidentialite", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/conditions-utilisation", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/cgv", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route.path}`])
        ),
      },
    }))
  );
}
