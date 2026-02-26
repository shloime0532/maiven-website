"use client";

import { useState, useRef, useEffect } from "react";
import { Robot, X, PaperPlaneRight, ArrowSquareOut } from "@phosphor-icons/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Maiven's AI. Ask me anything about our services or how we can help your business.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Stop pulsing after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

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
      setMessages([...newMessages, { role: "assistant", content: data.reply || "Reach us at info@mavinai.com or 347-263-0254." }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Email us at info@mavinai.com." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 animate-slide-up">
          <div className="bg-[#12143A] rounded-3xl border border-[#1E1A5A] shadow-2xl shadow-purple-500/20 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0F1150] border-b border-[#1E1A5A]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shrink-0">
                  <Robot size={18} weight="duotone" className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Maiven AI</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#chat"
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-[#A79CC4] hover:text-white hover:bg-white/10 transition-colors"
                  title="Open full chat"
                >
                  <ArrowSquareOut size={16} />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-[#A79CC4] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
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
                  <div className="bg-[#1E1A5A] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                    <span className="chat-dot" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#1E1A5A] bg-[#0F1150]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a message..."
                  className="flex-1 bg-[#12143A] border border-[#1E1A5A] rounded-xl px-3 py-2.5 text-sm text-white placeholder-[#A79CC4] focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 hover:scale-105 shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
                  aria-label="Send"
                >
                  <PaperPlaneRight size={16} weight="fill" className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/40 transition-all duration-300 hover:scale-110 ${
          pulse ? "animate-glow" : ""
        }`}
        style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
        aria-label={open ? "Close chat" : "Chat with Maiven AI"}
      >
        {open ? (
          <X size={22} weight="bold" className="text-white" />
        ) : (
          <Robot size={24} weight="duotone" className="text-white" />
        )}

        {/* Notification dot */}
        {!open && pulse && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#07082D]" />
        )}
      </button>
    </>
  );
}
