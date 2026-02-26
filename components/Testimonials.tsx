"use client";

import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "I didn't realize how much time I was wasting on back-and-forth messages until Maiven automated my entire booking process. My calendar fills itself now.",
    name: "Rachel M.",
    business: "Owner, Blossom Med Spa — Toms River, NJ",
    initials: "RM",
  },
  {
    quote: "The chatbot they built for us answers 80% of customer questions without us touching anything. Our team finally has time to focus on actual work.",
    name: "Daniel K.",
    business: "Managing Partner, K&R Contracting — Lakewood, NJ",
    initials: "DK",
  },
  {
    quote: "I came in asking for a website and left with a whole AI system running my customer follow-ups. I didn't even know that was possible. Maiven is in a different league.",
    name: "Sofia R.",
    business: "CEO, Prestige Auto Group — Brick, NJ",
    initials: "SR",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 md:py-32 relative">
      {/* Brand bg section */}
      <div className="absolute inset-0 bg-[#0B0D3E] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.12) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            What Happens When{" "}
            <span className="gradient-text">You Upgrade.</span>
          </h2>
          <p className="text-[#A79CC4] text-lg max-w-xl mx-auto">
            Real businesses. Real outcomes.
          </p>
        </div>

        {/* 3 testimonials — grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#12143A] rounded-2xl p-8 border border-[#1E1A5A] flex flex-col hover:border-purple-500/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} weight="fill" className="text-purple-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 text-base leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-[#1E1A5A]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#A79CC4] text-xs">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
