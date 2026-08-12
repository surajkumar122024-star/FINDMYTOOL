// src/app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using FindMyTool, our directory of AI and online productivity tools.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

      <p className="mb-4 leading-relaxed">
        By accessing or using FindMyTool (the "Site"), you agree to be bound
        by these Terms & Conditions. If you do not agree, please do not use
        the Site.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Use of the Site</h2>
      <p className="mb-4 leading-relaxed">
        FindMyTool is a directory that helps users discover AI and online
        productivity tools. Listings are provided for informational purposes
        only and do not constitute an endorsement or guarantee of any
        third-party product.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Third-Party Tools</h2>
      <p className="mb-4 leading-relaxed">
        Tools listed on FindMyTool are owned and operated by their respective
        companies. We are not responsible for the functionality, pricing,
        availability, or content of any third-party tool or website.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Intellectual Property</h2>
      <p className="mb-4 leading-relaxed">
        All logos and trademarks displayed on this Site belong to their
        respective owners. FindMyTool is not affiliated with or endorsed by
        the tools listed unless explicitly stated.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Limitation of Liability</h2>
      <p className="mb-4 leading-relaxed">
        FindMyTool is provided "as is" without warranties of any kind. We are
        not liable for any damages arising from your use of the Site or any
        third-party tool listed on it.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Changes to These Terms</h2>
      <p className="mb-4 leading-relaxed">
        We may update these Terms & Conditions from time to time. Continued
        use of the Site after changes are posted constitutes acceptance of
        the updated terms.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Contact Us</h2>
      <p className="leading-relaxed">
        Questions about these terms can be sent via the email listed in our
        footer.
      </p>
    </main>
  );
}
