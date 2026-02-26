"use client";

import Image from "next/image";
import { Globe, Robot, Microphone, Lightning, Code, ChartBar } from "@phosphor-icons/react";

const services = [
  {
    icon: Globe,
    title: "Websites That Work While You Sleep",
    desc: "Forget static brochure sites. Every Maiven website is a conversion machine — sophisticated design, blazing-fast performance, and AI features baked in from day one.",
    bullets: ["Mobile-first, pixel-perfect design", "Built-in lead capture & smart CTAs", "SEO-optimized from launch day", "Lightning-fast on every device"],
    image: "/service-website.jpg",
  },
  {
    icon: Robot,
    title: "A 24/7 Sales Rep That Never Clocks Out",
    desc: "Our AI chatbots are trained on your business — your services, your FAQs, your tone. They handle questions, qualify leads, and book appointments around the clock.",
    bullets: ["Trained on your specific business", "Books appointments automatically", "Captures & qualifies leads overnight", "Seamless handoff to your team"],
    image: "/service-chatbot.jpg",
  },
  {
    icon: Microphone,
    title: "Answer Every Call. Automatically.",
    desc: "Never miss a customer call again. Our AI voice agents answer the phone, handle common questions, take messages, and schedule appointments — sounding natural and professional.",
    bullets: ["Handles calls 24/7, no hold times", "Custom voice and tone for your brand", "Integrates with your calendar", "Full call transcripts delivered to you"],
    image: "/service-voice.jpg",
  },
  {
    icon: Lightning,
    title: "Stop Doing It Manually.",
    desc: "If your team copy-pastes data, sends the same emails over and over, or follows up with leads by hand — we can automate it. Maiven eliminates the bottlenecks.",
    bullets: ["Automated follow-ups & reminders", "CRM sync and data management", "Workflow automation across your tools", "Hours saved every single week"],
    image: "/service-automation.jpg",
  },
  {
    icon: Code,
    title: "Built for Your Business. No Compromises.",
    desc: "Sometimes off-the-shelf software doesn't cut it. We build custom dashboards, tracking tools, client portals, and internal apps that fit your operations exactly.",
    bullets: ["Tailored to your exact workflow", "Client portals & dashboards", "Inventory, scheduling & tracking tools", "Fully owned by you"],
    image: "/service-software.jpg",
  },
  {
    icon: ChartBar,
    title: "A Full Sales Team, Powered by AI.",
    desc: "We build you the infrastructure to generate, nurture, and close leads — automatically. Think AI outbound, follow-up sequences, and smart pipelines working 24/7.",
    bullets: ["Automated lead generation pipelines", "AI-powered follow-up sequences", "Lead scoring & prioritization", "Real-time sales dashboards"],
    image: "/service-sales.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-5">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            One Partner.{" "}
            <span className="gradient-text">Every Solution.</span>
          </h2>
          <p className="text-[#A79CC4] text-lg max-w-2xl mx-auto">
            We don&apos;t hand you a template and wish you luck. We look at your entire business and build what it actually needs.
          </p>
        </div>

        {/* Grid — 3 columns × 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#12143A] rounded-2xl overflow-hidden border border-[#1E1A5A] hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Service image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12143A]/40 to-[#12143A]" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Icon size={20} weight="duotone" className="text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white leading-snug mb-2">{service.title}</h3>
                  <p className="text-[#A79CC4] text-sm leading-relaxed mb-4">{service.desc}</p>

                  <ul className="mt-auto space-y-1.5">
                    {service.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#C4B5FD]">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
