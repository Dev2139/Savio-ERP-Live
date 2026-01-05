import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SavioERP Modules - Comprehensive ERP Solution",
    template: "%s | SavioERP Modules"
  },
  description: "Explore SavioERP's comprehensive ERP modules for manufacturing enterprises. Our integrated solution includes manufacturing, inventory, HR, financials, supply chain, and compliance modules designed to streamline your operations.",
  keywords: [
    "ERP modules",
    "manufacturing ERP modules",
    "SavioERP modules",
    "inventory management system",
    "manufacturing software modules",
    "HR management system",
    "financial ERP modules",
    "supply chain management",
    "compliance management system",
    "manufacturing ERP software",
    "integrated ERP solution",
    "business management modules",
    "enterprise resource planning",
    "manufacturing operations management",
    "ERP software India"
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
    canonical: "https://www.savioerp.com/savio-erp",
  },
  openGraph: {
    title: "SavioERP Modules - Comprehensive ERP Solution",
    description: "Explore SavioERP's comprehensive ERP modules for manufacturing enterprises.",
    url: "https://www.savioerp.com/savio-erp",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "SavioERP Modules - Comprehensive ERP Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavioERP Modules - Comprehensive ERP Solution",
    description: "Explore SavioERP's comprehensive ERP modules for manufacturing enterprises.",
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