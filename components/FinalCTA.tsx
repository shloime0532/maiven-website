"use client";

import { ArrowRight } from "@phosphor-icons/react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          style={{ background: "linear-gradient(135deg, #12143A 0%, #1a0d4a 50%, #12143A 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.3) 0%, transparent 65%)" }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
              Get Started
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
              Ready to See What Your Business{" "}
              <span className="gradient-text">Could Look Like?</span>
            </h2>

            <p className="text-[#A79CC4] text-lg max-w-xl mx-auto mb-10">
              Tell us about your business. We&apos;ll show you exactly what we&apos;d build — and what it would change.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#chat"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
              >
                Start the Conversation <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="/onboarding"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-[#A78BFA] border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-200"
              >
                Begin Onboarding →
              </a>
            </div>

            <p className="text-[#A79CC4]/60 text-sm mt-6">
              No sales pressure. No commitments. Just a real look at what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
