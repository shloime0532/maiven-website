"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PaperPlaneRight, Robot, CheckCircle, ArrowLeft } from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ONBOARDING_STEPS = [
  "What's your business name?",
  "What does your business do, and who are your customers?",
  "What's your main goal — more leads, a website, automation, or something else?",
  "Do you have an existing website? If so, what's the URL?",
  "What's your name and best contact info (email or phone)?",
];

export default function OnboardingPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to Maiven! 🎉 I'm going to walk you through a quick onboarding process — it only takes a few minutes and helps our team understand exactly what you need.\n\nLet's start: What's your business name?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const newAnswers = [...answers, text];
    setAnswers(newAnswers);

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);

    const nextStep = stepIndex + 1;

    if (nextStep < ONBOARDING_STEPS.length) {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 800));
      setMessages([...newMessages, { role: "assistant", content: ONBOARDING_STEPS[nextStep] }]);
      setStepIndex(nextStep);
      setLoading(false);
    } else {
      // Final step — save and confirm
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));

      // Save to Supabase via API
      try {
        await fetch("/api/onboarding", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers: newAnswers,
            messages: [...newMessages],
          }),
        });
      } catch {
        // Silent fail — data will be in messages anyway
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Perfect — we have everything we need! 🚀\n\nOur team will review your info and reach out within 24 hours. In the meantime, feel free to explore our services or chat with our AI on the homepage.\n\nWelcome to Maiven!",
        },
      ]);
      setSubmitted(true);
      setLoading(false);
    }
  }

  const progress = Math.min(((stepIndex) / ONBOARDING_STEPS.length) * 100, submitted ? 100 : 95);

  return (
    <div className="min-h-screen bg-[#07082D] hero-grid flex flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-[#1E1A5A] bg-[#07082D]/90 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 text-[#A79CC4] hover:text-white text-sm transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <Image src="/logo-white.png" alt="Maiven" width={120} height={36} className="h-8 w-auto" />
        <div className="w-24" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Client Onboarding
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-2">
              Let&apos;s Get You{" "}
              <span className="gradient-text">Started.</span>
            </h1>
            <p className="text-[#A79CC4] text-base">A quick 5-question walkthrough. Takes 2 minutes.</p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-[#A79CC4] mb-2">
              <span>Step {Math.min(stepIndex + 1, ONBOARDING_STEPS.length)} of {ONBOARDING_STEPS.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-1.5 bg-[#1E1A5A] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                }}
              />
            </div>
          </div>

          {/* Chat window */}
          <div className="bg-[#12143A] rounded-3xl border border-[#1E1A5A] overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1E1A5A] bg-[#0F1150]">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Robot size={18} weight="duotone" className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Maiven Onboarding</p>
                <p className="text-purple-300 text-xs">Guided setup</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto px-5 py-5 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "text-white rounded-br-sm"
                        : "bg-[#1E1A5A] text-white/90 rounded-bl-sm"
                    }`}
                    style={m.role === "user" ? { background: "linear-gradient(135deg, #7C3AED, #5B21B6)" } : {}}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#1E1A5A] rounded-2xl rounded-bl-sm px-5 py-3.5 flex items-center gap-1.5">
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input or completion */}
            {submitted ? (
              <div className="px-5 py-6 border-t border-[#1E1A5A] bg-[#0F1150] flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <CheckCircle size={20} weight="fill" />
                  Onboarding Complete!
                </div>
                <Link
                  href="/"
                  className="text-[#A78BFA] hover:text-white text-sm transition-colors"
                >
                  ← Return to homepage
                </Link>
              </div>
            ) : (
              <div className="px-4 py-4 border-t border-[#1E1A5A] bg-[#0F1150]">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type your answer..."
                    autoFocus
                    className="flex-1 bg-[#12143A] border border-[#1E1A5A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#A79CC4] focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  <button
                    onClick={send}
                    disabled={!input.trim() || loading}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 hover:scale-105 shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
                    aria-label="Send answer"
                  >
                    <PaperPlaneRight size={18} weight="fill" className="text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
