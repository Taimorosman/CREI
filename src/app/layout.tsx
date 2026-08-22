import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MouseParallax } from "@/components/MouseParallax";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joudah Al-Ibtkar | Quality & Innovation in Construction Chemicals",
  description: "Joudah Al-Ibtkar Limited (JIC) — delivering advanced decorative and construction chemical solutions across the Kingdom of Saudi Arabia since 2023. Quality and innovation at every step.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=6", type: "image/x-icon" },
      { url: "/icon.png?v=6", type: "image/png", sizes: "128x128" },
      { url: "/icon.svg?v=6", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=6",
    apple: "/favicon.ico?v=6",
  },
  alternates: {
    languages: {
      en: "/",
      ar: "/",
    },
  },
  openGraph: {
    title: "Joudah Al-Ibtkar | Quality & Innovation in Construction Chemicals",
    description: "Joudah Al-Ibtkar Limited (JIC) — delivering advanced decorative and construction chemical solutions across the Kingdom of Saudi Arabia since 2023.",
    siteName: "Joudah Al-Ibtkar",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${plusJakartaSans.variable} ${syne.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LanguageProvider>
          <MouseParallax />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </LanguageProvider>
      </body>
    </html>
  );
}
