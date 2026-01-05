import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SavioERP - Enterprise Resource Planning Solution",
    template: "%s | SavioERP - Comprehensive ERP Solution"
  },
  description: "Comprehensive ERP solution for mid-to-large manufacturing enterprises. Streamline operations, improve efficiency, and scale your business with our enterprise-grade platform. Integrated modules for inventory, production, finance, HR, sales, and more.",
  keywords: ["ERP", "Manufacturing", "Business Management", "Enterprise Software", "SavioERP", "Inventory Management", "Production Planning", "Finance Management", "HR Management", "Manufacturing ERP", "Business Automation", "Supply Chain", "CRM", "Financial Management", "Manufacturing Operations"],
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
    canonical: "https://www.savioerp.com",
  },
  openGraph: {
    title: "SavioERP - Enterprise Resource Planning Solution",
    description: "Comprehensive ERP solution for mid-to-large manufacturing enterprises. Streamline operations, improve efficiency, and scale your business with our enterprise-grade platform.",
    url: "https://www.savioerp.com",
    siteName: "SavioERP",
    images: [
      {
        url: "https://res.cloudinary.com/dsddldquo/image/upload/v1767434891/d4xfgxvnt5iwyditsy1a.png",
        width: 1200,
        height: 630,
        alt: "SavioERP - Enterprise Resource Planning Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavioERP - Enterprise Resource Planning Solution",
    description: "Comprehensive ERP solution for mid-to-large manufacturing enterprises. Streamline operations, improve efficiency, and scale your business with our enterprise-grade platform.",
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
  icons: {
    icon: "https://res.cloudinary.com/dsddldquo/image/upload/v1766252828/vztkaqjmbpr5ernaekqk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
