import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${site.displayName} — ${site.roleLine}`,
    template: `%s — ${site.displayName}`,
  },
  description: `${site.roleLine} in ${site.locationLine}. Custom tattoos and available designs.`,
  openGraph: {
    siteName: site.displayName,
    locale: "en_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
