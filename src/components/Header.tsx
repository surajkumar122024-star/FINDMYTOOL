"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
            {/* Premium Logo Icon matching design assets */}
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 transition-transform group-hover:scale-105"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              FindMy<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tool</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <a
            href="#categories"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600"
          >
            Categories
          </a>
          <a
            href="#trending"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600"
          >
            Trending
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600"
          >
            About
          </a>
        </nav>

        {/* Action Button & Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 md:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full border-b border-zinc-100 bg-white shadow-lg animate-in slide-in-from-top-4 duration-200 md:hidden">
          <div className="space-y-1 px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-950 hover:bg-zinc-50 hover:text-blue-600"
            >
              Home
            </Link>
            <a
              href="#categories"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-950 hover:bg-zinc-50 hover:text-blue-600"
            >
              Categories
            </a>
            <a
              href="#trending"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-950 hover:bg-zinc-50 hover:text-blue-600"
            >
              Trending
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-950 hover:bg-zinc-50 hover:text-blue-600"
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
