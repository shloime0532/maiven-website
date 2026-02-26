"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#07082D] border-t border-[#1E1A5A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-white.png"
              alt="Maiven"
              width={140}
              height={42}
              className="h-10 w-auto mb-4"
            />
            <p className="text-[#A79CC4] text-sm leading-relaxed max-w-xs">
              AI Built for Your Business. Websites, chatbots, voice agents, and automation for small businesses that want to grow faster.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Results", href: "#results" },
                { label: "Talk to AI", href: "#chat" },
                { label: "Client Onboarding", href: "/onboarding" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#A79CC4] hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-[#A79CC4] hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-purple-400 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-center gap-3 text-[#A79CC4] hover:text-white text-sm transition-colors">
                  <Envelope size={16} className="text-purple-400 shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#A79CC4] text-sm">
                  <MapPin size={16} className="text-purple-400 shrink-0 mt-0.5" />
                  {ADDRESS}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1E1A5A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#A79CC4]/60 text-xs">
            © {new Date().getFullYear()} Maiven. All rights reserved.
          </p>
          <p className="text-[#A79CC4]/40 text-xs">
            Toms River, NJ · AI-Powered Digital Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
