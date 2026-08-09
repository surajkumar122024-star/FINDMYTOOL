// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://findmytool-gamma.vercel.app"), // apna custom domain lagana baad me
  title: {
    default: "FindMyTool - Best Free Online Tools Directory",
    template: "%s | FindMyTool",
  },
  description:
    "Discover 100+ free online tools for developers, students & professionals - converters, calculators, generators, and utilities, all in one place.",
  keywords: [
    "free online tools",
    "online tool finder",
    "best web tools",
    "developer tools online",
    "free converters",
    "free calculators",
    "productivity tools",
    "utility tools website",
    "findmytool",
    // apni site ke actual tools ke naam yahan add karo, e.g. "pdf converter online", "image compressor free"
  ],
  authors: [{ name: "Suraj Kumar" }],
  openGraph: {
    title: "FindMyTool - Best Free Online Tools Directory",
    description: "Find the right free online tool in seconds.",
    url: "https://findmytool-gamma.vercel.app",
    siteName: "FindMyTool",
    type: "website",
    images: ["/og-image.png"], // 1200x630 image public folder me daalo
  },
  twitter: {
    card: "summary_large_image",
    title: "FindMyTool",
    description: "Best free online tools, all in one place.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
