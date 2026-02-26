"use client";

import { useState, useRef, useEffect } from "react";
import { PaperPlaneRight, Robot } from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi — I'm Maiven's AI. I can tell you about our services, help you figure out what your business needs, or get you set up with our team. What's on your mind?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply || "Let me connect you with the team — reach us at info@mavinai.com or 347-263-0254." }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please reach us directly at info@mavinai.com or call 347-263-0254." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" className="py-24 md:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.1) 0%, transparent 60%)" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Experience It Yourself
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Talk to Our AI.{" "}
            <span className="gradient-text">Right Now.</span>
          </h2>
          <p className="text-[#A79CC4] text-lg max-w-xl mx-auto">
            This chatbot is built with the same technology we deploy for our clients. Ask it anything about what we do, what we can build for you, or how to get started.
          </p>
        </div>

        {/* Chat window */}
        <div className="bg-[#12143A] rounded-3xl border border-[#1E1A5A] overflow-hidden shadow-2xl shadow-purple-500/10">
          {/* Header bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1E1A5A] bg-[#0F1150]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
              <Robot size={18} weight="duotone" className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Maiven AI</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online now
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 md:h-96 overflow-y-auto px-5 py-5 space-y-4 flex flex-col">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "text-white rounded-br-sm"
                      : "bg-[#1E1A5A] text-white/90 rounded-bl-sm"
                  }`}
                  style={
                    m.role === "user"
                      ? { background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }
                      : {}
                  }
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

          {/* Input */}
          <div className="px-4 py-4 border-t border-[#1E1A5A] bg-[#0F1150]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask me anything about Maiven..."
                className="flex-1 bg-[#12143A] border border-[#1E1A5A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#A79CC4] focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 hover:scale-105 shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
                aria-label="Send message"
              >
                <PaperPlaneRight size={18} weight="fill" className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
