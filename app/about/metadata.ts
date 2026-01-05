import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Us - SavioERP",
    template: "%s | SavioERP"
  },
  description: "Learn about SavioERP, a leading provider of ERP solutions for manufacturing enterprises since 2009. Discover our mission, core values, and commitment to transforming manufacturing operations through innovative technology.",
  keywords: [
    "about SavioERP",
    "SavioERP company",
    "ERP solutions company",
    "manufacturing ERP provider",
    "SavioERP mission",
    "SavioERP values",
    "ERP software company",
    "manufacturing software company",
    "business management solutions",
    "enterprise software company",
    "SavioERP history",
    "ERP development company",
    "manufacturing technology",
    "business automation company",
    "India ERP provider"
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
    canonical: "https://www.savioerp.com/about",
  },
  openGraph: {
    title: "About Us - SavioERP",
    description: "Learn about SavioERP, a leading provider of ERP solutions for manufacturing enterprises since 2009.",
    url: "https://www.savioerp.com/about",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "About SavioERP - Leading ERP Solutions Provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - SavioERP",
    description: "Learn about SavioERP, a leading provider of ERP solutions for manufacturing enterprises since 2009.",
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