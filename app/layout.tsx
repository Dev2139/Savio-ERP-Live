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
    template: "%s | SavioERP"
  },
  description: "Comprehensive ERP solution for mid-to-large manufacturing enterprises. Streamline operations, improve efficiency, and scale your business with our enterprise-grade platform.",
  keywords: ["ERP", "Manufacturing", "Business Management", "Enterprise Software", "SavioERP", "Inventory Management", "Production Planning", "Finance Management", "HR Management"],
  authors: [{ name: "SavioERP Team" }],
  creator: "SavioERP",
  publisher: "SavioERP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.savioerp.com"),
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
