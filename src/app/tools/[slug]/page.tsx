import { notFound } from "next/navigation";
import toolsData from "@/data/tools.json";
import { Tool } from "@/lib/search";
import Link from "next/link";

const tools = toolsData as Tool[];

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/" className="text-indigo-600 text-sm hover:underline">
        ← Back to Home
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-2xl shrink-0">
          {tool.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{tool.name}</h1>
          <p className="text-slate-500 mt-1">{tool.category}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
          {tool.pricing}
        </span>
        <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium">
          ★ {tool.rating}
        </span>
      </div>

      <p className="mt-6 text-lg text-slate-700 leading-relaxed">
        {tool.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Visit Website →
      </a>
    </main>
  );
}
