"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#chat" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07082D]/95 backdrop-blur-md border-b border-[#1E1A5A] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center min-h-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo-white.png"
              alt="Maiven"
              width={160}
              height={48}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[#A79CC4] hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#chat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              Talk to Our AI →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B0D3E] border-t border-[#1E1A5A]">
          <div className="px-4 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[#A79CC4] hover:text-white py-2 text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#chat"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-3 rounded-lg font-semibold text-white mt-4"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
            >
              Talk to Our AI →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
