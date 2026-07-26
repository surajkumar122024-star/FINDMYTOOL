export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="10" cy="10" r="5" />
                  <line x1="14" y1="14" x2="18.5" y2="18.5" />
                  <path d="M19 13v2m-1-1h2m-5-8.5.5.5m0-1-.5.5" strokeWidth="1.5" />
                </svg>
              </span>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  FindMy<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tool</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Discover the absolute best tools, extensions, and SaaS applications. Empowering creators and builders to find the exact tools they need.
            </p>
          </div>

          {/* Directory Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-wider mb-4">Directory</h3>
            <ul className="space-y-3">
              <li>
                <a href="#categories" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Popular Categories
                </a>
              </li>
              <li>
                <a href="#trending" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Trending Tools
                </a>
              </li>
              <li>
                <a href="#featured" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Featured Products
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-wider mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-sm text-zinc-500 hover:text-blue-600 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-wider mb-4">Get in Touch</h3>
            <p className="text-sm text-zinc-500 mb-3 leading-relaxed">
              Have a tool you'd like to submit, or want to collaborate? Contact us anytime.
            </p>
            <a
              href="mailto:support@findmytool.com"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              support@findmytool.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-400">
            &copy; {currentYear} FindMyTool. All rights reserved. Built with Next.js & React.
          </p>
          <p className="text-xs text-zinc-400 max-w-md md:text-right">
            Disclaimer: The tools listed here are for informational purposes. Ratings represent community consensus.
          </p>
        </div>
      </div>
    </footer>
  );
}
