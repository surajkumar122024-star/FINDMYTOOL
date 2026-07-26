"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50,000+", label: "Tools", color: "text-blue-600" },
  { value: "600+", label: "Categories", color: "text-indigo-600" },
  { value: "Daily", label: "Updated", color: "text-violet-600" },
  { value: "100%", label: "Free Search", color: "text-blue-600" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1"
          style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
        >
          <span className={`text-3xl font-extrabold tracking-tight ${stat.color}`}>
            {stat.value}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
