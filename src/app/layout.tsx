// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://findmytool-gamma.vercel.app"),
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
  ],
  authors: [{ name: "Suraj Kumar" }],
  <meta name="google-site-verification" content="GGvF0UPj84iXp1cP1DJ_wHErlNISZjBJvqL34DwgOOY" />
  },
  openGraph: {
    title: "FindMyTool - Best Free Online Tools Directory",
    description: "Find the right free online tool in seconds.",
    url: "https://findmytool-gamma.vercel.app",
    siteName: "FindMyTool",
    type: "website",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
