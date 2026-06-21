import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Metallbau Meisterbetrieb`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Metallbau",
    "Metallbaumeister",
    "Schlosserei",
    "Geländer",
    "Edelstahlgeländer",
    "Treppengeländer",
    "Vordach",
    "Carport",
    "Zaun",
    "Tor",
    "Sichtschutz",
    "Schweißtechnik",
    "Edelstahl",
    "Aluminium",
    "Stahlbau",
    "Sonderanfertigung",
    site.owner,
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.legalName} | Metallbau Meisterbetrieb`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#14181b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-white antialiased">{children}</body>
    </html>
  );
}
