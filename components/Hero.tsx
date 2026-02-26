"use client";

import Image from "next/image";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-grid">
      {/* Background glow */}
      <div className="absolute inset-0 glow-orb pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Hero image (subtle overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="AI neural network visualization"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07082D]/60 via-[#07082D]/40 to-[#07082D]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-up">
            <Sparkle size={12} weight="fill" />
            AI-First Digital Agency — Toms River, NJ
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100">
            Your Business,{" "}
            <span className="gradient-text">Supercharged</span>
            <br className="hidden sm:block" /> by AI.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#A79CC4] max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-up delay-200">
            Maiven doesn&apos;t just build you a website — we study your business, identify what&apos;s holding you back, and deploy AI-powered solutions you didn&apos;t even know were possible.
          </p>

          <p className="text-sm text-purple-300/70 font-medium mb-10 animate-fade-up delay-300">
            Websites · Chatbots · Voice Agents · Automation · Custom Software
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <a
              href="#chat"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
            >
              Talk to Our AI <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-[#A78BFA] border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-200"
            >
              See What We Build
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 animate-fade-up delay-500">
            {[
              "Websites in Weeks",
              "Chatbots in Days",
              "Always Local & Available",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#A79CC4]">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-10">
        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}
