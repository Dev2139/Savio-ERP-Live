import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Clients - Industries We Serve | SavioERP",
    template: "%s | SavioERP Clients"
  },
  description: "Discover the diverse range of manufacturing industries we serve at SavioERP. From automotive and pharmaceutical to engineering and packaging, our ERP solutions meet unique sector demands. Explore our client success stories and notable partnerships.",
  keywords: [
    "SavioERP clients",
    "manufacturing ERP clients",
    "ERP software clients",
    "manufacturing industries",
    "automotive ERP",
    "pharmaceutical ERP",
    "engineering ERP",
    "packaging ERP",
    "healthcare ERP",
    "manufacturing software clients",
    "ERP success stories",
    "client testimonials",
    "manufacturing industry solutions",
    "ERP case studies",
    "industries served"
  ],
  authors: [{ name: "SavioERP", url: "https://www.savioerp.com" }],
  creator: "SavioERP",
  publisher: "SavioERP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.savioerp.com"),
  alternates: {
    canonical: "https://www.savioerp.com/clients",
  },
  openGraph: {
    title: "Our Clients - Industries We Serve | SavioERP",
    description: "Discover the diverse range of manufacturing industries we serve at SavioERP.",
    url: "https://www.savioerp.com/clients",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "SavioERP - Industries We Serve",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients - Industries We Serve | SavioERP",
    description: "Discover the diverse range of manufacturing industries we serve at SavioERP.",
    images: ["https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
};