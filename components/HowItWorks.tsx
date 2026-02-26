"use client";

import { MagnifyingGlass, Lightbulb, Hammer, TrendUp } from "@phosphor-icons/react";

const steps = [
  {
    icon: MagnifyingGlass,
    label: "01 — Discovery",
    title: "We Study Your Business",
    desc: "We start by understanding how your business actually runs — where customers come from, where they drop off, and what's being done manually that shouldn't be. No templates. No assumptions.",
  },
  {
    icon: Lightbulb,
    label: "02 — Strategy",
    title: "We Identify the Opportunities",
    desc: "Most businesses are sitting on 3–5 automations that would change everything. We map them out, prioritize by impact, and show you exactly what we'd build and why.",
  },
  {
    icon: Hammer,
    label: "03 — Build",
    title: "We Build It Fast",
    desc: "We move quickly. Websites launch in weeks, not months. Chatbots go live in days. Every project is built clean, tested thoroughly, and handed off with zero confusion.",
  },
  {
    icon: TrendUp,
    label: "04 — Grow",
    title: "Your Business Runs Smarter",
    desc: "Once your AI systems are live, you'll notice it fast — more leads, fewer manual tasks, customers getting answers at 2am. We stick around to optimize and expand as you grow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-5">
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            We Find What{" "}
            <span className="gradient-text">You&apos;re Missing.</span>
          </h2>
          <p className="text-[#A79CC4] text-lg max-w-2xl mx-auto">
            Most agencies ask what you want. We ask what you need — and show you what&apos;s possible.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative group">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent z-10 translate-x-0" />
                )}

                <div className="bg-[#12143A] rounded-2xl p-6 border border-[#1E1A5A] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-800/20 border border-purple-500/20 flex items-center justify-center mb-5">
                    <Icon size={24} weight="duotone" className="text-purple-400" />
                  </div>

                  <p className="text-purple-400/70 text-xs font-semibold uppercase tracking-wider mb-2">{step.label}</p>
                  <h3 className="font-bold text-lg text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-[#A79CC4] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
