import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF7A5C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myfitscan.com"),
  title: {
    template: "%s | MyFitScan",
    default: "MyFitScan — Atteins tes objectifs. Chaque jour.",
  },
  description:
    "MyFitScan combine scan corporel IA, suivi calorique photo et coaching personnel pour un accompagnement personnalisé et durable.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://myfitscan.com",
    siteName: "MyFitScan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyFitScan — Ton coach fitness IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyFitScan — Atteins tes objectifs. Chaque jour.",
    description:
      "Scan corporel IA, suivi calorique photo et coaching personnel.",
    images: ["/og-image.jpg"],
  },
  other: {
    "apple-itunes-app": "app-id=PLACEHOLDER",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
