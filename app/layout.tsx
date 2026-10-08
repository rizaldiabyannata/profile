import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Footer, Header, WhatsAppFab } from "./components";
import { site } from "@/lib/content";
import "./globals.css";

const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: software house in Lombok, NTB`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
};

const contract = `<!--
THESIS: ATO is the label on the pallet. Every product, service, and case is a shipping label racked in a warehouse; refuses the dark-gradient agency hero and icon-card grid.
OWN-WORLD: concrete-grey floor, one safety-yellow field, white label stock ruled in 2px black, black aisle signs with yellow letters, dashed unprinted labels for unfinished products; Barlow Condensed caps over Barlow.
STORY: a business owner reads "operational systems, not just websites", recognises their own warehouse and booking desk, sees proof per product, and asks for a consultation on WhatsApp.
FIRST VIEWPORT: full-bleed yellow field holding one large pallet label: ID row, condensed headline up to 6rem, three product cells (Ticko unprinted), then the black consultation button, WhatsApp, and a barcode.
FORM: warehouse signage & pallet labels, #3 on the ordered list, seed a67e9901.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "ID",
  },
  sameAs: [site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
