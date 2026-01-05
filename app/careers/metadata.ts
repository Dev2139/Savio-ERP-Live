import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Careers - Join Our Team at SavioERP",
    template: "%s | SavioERP Careers"
  },
  description: "Explore career opportunities at SavioERP. Browse current job openings, discover our company culture, and apply for positions in Ahmedabad, India. Join our dynamic team shaping the future of manufacturing ERP solutions.",
  keywords: [
    "jobs in Ahmedabad", 
    "SavioERP careers", 
    "ERP jobs", 
    "manufacturing jobs", 
    "frontend developer jobs", 
    "backend developer jobs", 
    "software jobs in Ahmedabad", 
    "IT jobs India", 
    "ERP developer jobs", 
    "manufacturing ERP jobs", 
    "SavioERP openings", 
    "job opportunities", 
    "career in ERP", 
    "tech jobs Ahmedabad", 
    "software developer jobs", 
    "engineering jobs", 
    "full-time jobs", 
    "jobs in India", 
    "SavioERP hiring", 
    "job vacancies"
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
    canonical: "https://www.savioerp.com/careers",
  },
  openGraph: {
    title: "Careers - Join Our Team at SavioERP",
    description: "Explore career opportunities at SavioERP. Browse current job openings, discover our company culture, and apply for positions in Ahmedabad, India.",
    url: "https://www.savioerp.com/careers",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "SavioERP - Join Our Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Team at SavioERP",
    description: "Explore career opportunities at SavioERP. Browse current job openings, discover our company culture, and apply for positions in Ahmedabad, India.",
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