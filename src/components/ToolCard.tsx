import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  // Helper to determine gradient based on category
  const getGradient = (category: string) => {
    switch (category) {
      case "AI Tools":
        return "from-violet-600 to-indigo-600";
      case "Coding Tools":
        return "from-sky-500 to-blue-600";
      case "Design Tools":
        return "from-rose-500 to-pink-500";
      case "SEO Tools":
      case "Marketing Tools":
        return "from-amber-500 to-orange-600";
      case "Productivity Tools":
        return "from-emerald-500 to-teal-600";
      case "Image Tools":
        return "from-cyan-500 to-blue-500";
      case "Video Tools":
        return "from-red-500 to-rose-600";
      case "Audio Tools":
        return "from-fuchsia-500 to-purple-600";
      case "PDF Tools":
        return "from-red-600 to-orange-600";
      case "Writing Tools":
        return "from-yellow-500 to-amber-600";
      default:
        return "from-zinc-500 to-slate-600";
    }
  };

  // Helper for pricing badge style
  const getPricingBadgeStyles = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case "free":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      case "paid":
        return "bg-rose-50 text-rose-700 border-rose-200/50";
      default:
        return "bg-blue-50 text-blue-700 border-blue-200/50";
    }
  };

  return (
   <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-200/60">
  {/* Mirror shine sweep effect */}
  <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <div>
        {/* Card Header (Logo and Badges) */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Logo Placeholder */}
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr ${getGradient(tool.category)} text-white font-bold shadow-md shadow-black/5`}>
            {tool.name.charAt(0)}
          </div>

          {/* Pricing & Category Badges */}
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${getPricingBadgeStyles(tool.pricing)}`}>
              {tool.pricing}
            </span>
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600">
              {tool.category.replace(" Tools", "")}
            </span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className="flex items-baseline gap-2 mb-1.5">
          <h3 className="text-base font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
            {tool.name}
          </h3>
          {/* Rating */}
          <div className="flex items-center gap-0.5 text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.209.814.67 1.453 1.378.997l4.09-2.635 4.09 2.635c.708.456 1.587-.183 1.378-.997l-1.196-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-bold text-zinc-600">{tool.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed mb-6">
          {tool.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between gap-4 mt-auto">
        {/* Tags */}
        <div className="flex items-center gap-1 overflow-hidden max-w-[50%]">
          {tool.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="truncate text-[10px] font-medium text-zinc-400"
              title={tag}
            >
              #{tag.toLowerCase().replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/10"
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-1 h-3 w-3"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
