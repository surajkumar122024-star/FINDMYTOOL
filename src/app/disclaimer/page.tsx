// src/app/disclaimer/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer regarding the accuracy of information and third-party tools listed on FindMyTool.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

      <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">General Information</h2>
      <p className="mb-4 leading-relaxed">
        The information provided on FindMyTool is for general informational
        purposes only. While we strive to keep tool listings, pricing labels,
        and descriptions accurate and up to date, we make no representations
        or warranties of any kind about the completeness, accuracy,
        reliability, or availability of this information.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">No Affiliation</h2>
      <p className="mb-4 leading-relaxed">
        FindMyTool is an independent directory. We are not affiliated with,
        endorsed by, or officially connected to the tools and companies
        listed on this Site, unless explicitly stated. All product names,
        logos, and trademarks are property of their respective owners.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Pricing & Free/Paid Labels</h2>
      <p className="mb-4 leading-relaxed">
        Pricing information and Free/Paid labels shown on the Site are
        provided as a general guide and may change without notice. Always
        confirm current pricing directly on the tool's official website
        before making a decision.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">External Links</h2>
      <p className="mb-4 leading-relaxed">
        Our Site contains links to external, third-party websites. We do not
        control and are not responsible for the content, privacy policies, or
        practices of any third-party site.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Not Professional Advice</h2>
      <p className="mb-4 leading-relaxed">
        Nothing on this Site constitutes professional, legal, or financial
        advice. Use of any tool listed is at your own discretion and risk.
      </p>
    </main>
  );
}
