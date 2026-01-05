import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact Us - SavioERP",
    template: "%s | SavioERP"
  },
  description: "Get in touch with SavioERP. Contact our team for ERP solutions, schedule a demo, or reach out for support. Located in Ahmedabad, India with business hours Monday-Friday 9AM-6PM IST.",
  keywords: [
    "contact SavioERP",
    "SavioERP contact",
    "ERP software contact",
    "manufacturing ERP support",
    "contact ERP provider",
    "SavioERP demo",
    "business hours",
    "contact form",
    "ERP consultation",
    "manufacturing software support",
    "SavioERP phone",
    "SavioERP email",
    "Ahmedabad ERP company",
    "business inquiry",
    "technical support"
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
    canonical: "https://www.savioerp.com/contact",
  },
  openGraph: {
    title: "Contact Us - SavioERP",
    description: "Get in touch with SavioERP. Contact our team for ERP solutions, schedule a demo, or reach out for support.",
    url: "https://www.savioerp.com/contact",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "Contact SavioERP - Get in Touch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - SavioERP",
    description: "Get in touch with SavioERP. Contact our team for ERP solutions, schedule a demo, or reach out for support.",
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