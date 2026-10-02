import type { Metadata } from "next";
import { Barlow_Condensed, Public_Sans } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: company.meta.title,
  description: company.meta.description,
  metadataBase: new URL(company.meta.url),
  openGraph: {
    title: company.meta.title,
    description: company.meta.description,
    url: company.meta.url,
    siteName: company.legalName,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${publicSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}