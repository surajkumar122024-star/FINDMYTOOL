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
  title: "FindMyTool - Discover the Best AI, Coding & Productivity Tools",
  description:"Discover and search for the best online tools, AI helpers, PDF utilities, image editors, browser extensions, and developer SaaS platforms on FindMyTool.",
  keywords: ["AI Tools", "PDF Tools", "Image Tools", "Coding Tools", "SEO Tools", "SaaS Directory", "Product Hunt"],
  authors: [{ name: "FindMyTool Team" }],
  openGraph: {
    title: "FindMyTool - Discover the Best Online Tools",
    description: "Search and discover the best AI helpers, PDF utilities, coding editors, and SaaS applications on FindMyTool.",
    url: "https://findmytool.com",
    siteName: "FindMyTool",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FindMyTool - Discover the Best Online Tools",
    description: "Search and discover the best AI helpers, PDF utilities, coding editors, and SaaS applications on FindMyTool.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-indigo-50 via-white to-purple-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
