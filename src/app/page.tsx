import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import StatsSection from "@/components/StatsSection";
import toolsData from "@/data/tools.json";
import { Tool, Category } from "@/types";

export default function Home() {
  const tools: Tool[] = toolsData as Tool[];

  const categories: Category[] = [
    {
      name: "AI Tools",
      slug: "ai-tools",
      iconName: "ai",
      description: "Chatbots, copywriters, and generative art models.",
      count: tools.filter((t) => t.category === "AI Tools").length,
    },
    {
      name: "Image Tools",
      slug: "image-tools",
      iconName: "image",
      description: "Image compressors, vector editors, background removers.",
      count: tools.filter((t) => t.category === "Image Tools").length,
    },
    {
      name: "PDF Tools",
      slug: "pdf-tools",
      iconName: "pdf",
      description: "PDF editors, converters, compressors, document utilities.",
      count: tools.filter((t) => t.category === "PDF Tools").length,
    },
    {
      name: "Video Tools",
      slug: "video-tools",
      iconName: "video",
      description: "Screen recorders, video editors, production helpers.",
      count: tools.filter((t) => t.category === "Video Tools").length,
    },
    {
      name: "Audio Tools",
      slug: "audio-tools",
      iconName: "audio",
      description: "Text-to-speech generators and voice editors.",
      count: tools.filter((t) => t.category === "Audio Tools").length,
    },
    {
      name: "Writing Tools",
      slug: "writing-tools",
      iconName: "writing",
      description: "AI writing assistants, grammar checkers, translators.",
      count: tools.filter((t) => t.category === "Writing Tools").length,
    },
    {
      name: "Coding Tools",
      slug: "coding-tools",
      iconName: "code",
      description: "AI code editors, prompt-to-UI platforms, environments.",
      count: tools.filter((t) => t.category === "Coding Tools").length,
    },
    {
      name: "SEO Tools",
      slug: "seo-tools",
      iconName: "seo",
      description: "Rank trackers, backlink checkers, content audit tools.",
      count: tools.filter((t) => t.category === "SEO Tools").length,
    },
    {
      name: "Marketing Tools",
      slug: "marketing-tools",
      iconName: "marketing",
      description: "Email automation platforms and digital marketing suites.",
      count: tools.filter((t) => t.category === "Marketing Tools").length,
    },
    {
      name: "Productivity Tools",
      slug: "productivity-tools",
      iconName: "productivity",
      description: "Wiki platforms, workspace layouts, and agile trackers.",
      count: tools.filter((t) => t.category === "Productivity Tools").length,
    },
  ];

  const trendingTools = [...tools].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const featuredAITools = tools.filter((t) => t.category === "AI Tools").slice(0, 4);
  const featuredTools = tools.slice(4, 12);

  // Category chips with emoji icons
  const categoryChips = [
    { name: "AI Tools", icon: "🤖", slug: "ai-tools" },
    { name: "Image Tools", icon: "🖼️", slug: "image-tools" },
    { name: "PDF Tools", icon: "📄", slug: "pdf-tools" },
    { name: "Video Tools", icon: "🎬", slug: "video-tools" },
    { name: "Audio Tools", icon: "🎵", slug: "audio-tools" },
    { name: "Writing Tools", icon: "✍️", slug: "writing-tools" },
    { name: "Coding Tools", icon: "💻", slug: "coding-tools" },
    { name: "SEO Tools", icon: "📈", slug: "seo-tools" },
    { name: "Marketing", icon: "📣", slug: "marketing-tools" },
    { name: "Productivity", icon: "⚡", slug: "productivity-tools" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex-1">
        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28"
          style={{
            background:
              "linear-gradient(160deg, #EFF6FF 0%, #F5F3FF 40%, #FFFFFF 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-indigo-300/8 blur-[80px]" />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              The #1 Tool Discovery Platform
            </div>

            {/* Headline */}
            <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Discover the Best{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                AI &amp; Online Tools
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
              Browse 50,000+ curated AI tools, productivity apps, design utilities,
              coding helpers, and more — all in one place.
            </p>

{/* Search Bar */}
<div className="mx-auto mt-10 max-w-2xl">
  <SearchBar />
</div>

              {/* Colorful Category Chips with icons */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {categoryChips.map((chip) => (
                  <a
                    key={chip.slug}
                    href="#categories"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                  >
                    <span>{chip.icon}</span>
                    {chip.name}
                  </a>
                ))}
              </div>

            {/* Animated Stats */}
            <StatsSection />
          </div>
        </section>

        {/* ─── CATEGORIES ──────────────────────────────────────────────── */}
        <section
          id="categories"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Browse by Category
            </h2>
            <p className="text-sm text-slate-500 sm:text-base">
              Explore tools across 10+ popular categories.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </section>

        {/* ─── TRENDING TOOLS ──────────────────────────────────────────── */}
        <section
          id="trending"
          className="border-t border-slate-100 bg-gradient-to-b from-slate-50/60 to-white py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  🔥 Hot Right Now
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Trending Tools
                </h2>
                <p className="mt-1 text-sm text-slate-500 sm:text-base">
                  Top-rated utilities loved by the community this week.
                </p>
              </div>
              <a
                href="#categories"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all tools →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trendingTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED AI TOOLS ───────────────────────────────────────── */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
                  🤖 AI Spotlight
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Featured AI Tools
                </h2>
                <p className="mt-1 text-sm text-slate-500 sm:text-base">
                  The most powerful AI tools available right now.
                </p>
              </div>
              <a
                href="#categories"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Browse AI tools →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredAITools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED DIRECTORY ──────────────────────────────────────── */}
        <section
          id="featured"
          className="border-t border-slate-100 bg-gradient-to-b from-slate-50/60 to-white py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  ⭐ Editor&apos;s Picks
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Featured Directory
                </h2>
                <p className="mt-1 text-sm text-slate-500 sm:text-base">
                  Handpicked tools curated for maximum productivity and output.
                </p>
              </div>
              <a
                href="#categories"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                See full directory →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY FINDMYTOOL ──────────────────────────────────────────── */}
        <section id="about" className="border-t border-slate-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  FindMyTool?
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                We take the hassle out of software discovery so you can focus on
                what matters — building great things.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "✅",
                  bg: "bg-blue-50",
                  title: "Curated & Vetted",
                  desc: "Every tool is hand-vetted to guarantee real utility and quality.",
                },
                {
                  icon: "⚡",
                  bg: "bg-emerald-50",
                  title: "Lightning Fast",
                  desc: "Static pages and server components for instant response times.",
                },
                {
                  icon: "💰",
                  bg: "bg-violet-50",
                  title: "Pricing Transparency",
                  desc: "Clear Free / Paid / Freemium labels so you always know what to expect.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl ${f.bg}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
