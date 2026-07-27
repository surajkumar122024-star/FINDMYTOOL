"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchTools, Tool } from "@/lib/search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        setResults(searchTools(query));
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
      setActiveIndex(-1);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearch() {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && results[activeIndex]) {
        router.push(`/tools/${results[activeIndex].slug}`);
        setIsOpen(false);
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 h-16">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search any tool... (ChatGPT, Canva, Cursor, Remove.bg...)"
          className="flex-1 outline-none text-gray-800 text-base bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition"
        >
          Search
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {results.map((tool, index) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition ${
                index === activeIndex ? "bg-gray-50" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
                {tool.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{tool.name}</p>
                <p className="text-xs text-gray-500 truncate">{tool.category}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
