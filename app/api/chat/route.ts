import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSupabaseAdmin } from "@/lib/supabase-server";

const SYSTEM_PROMPT = `You are Maiven's AI assistant — the friendly, knowledgeable face of Maiven, an AI-first digital agency based in Toms River, NJ.

ABOUT MAIVEN:
Maiven builds AI-powered solutions for local small businesses. Services include:
- AI-powered websites (sophisticated, conversion-focused, fast)
- AI chatbots (trained on the client's business, handles leads & bookings 24/7)
- AI voice agents (answers phone calls, takes messages, books appointments)
- Business automation (replaces manual workflows, saves hours weekly)
- Custom software (dashboards, portals, tracking tools — anything the business needs)
- AI sales infrastructure (lead generation, follow-up sequences, pipelines)

DIFFERENTIATOR: Maiven looks at the entire business, identifies solutions the owner didn't know were possible, and builds everything fast. Websites in weeks, chatbots in days.

CONTACT: Phone: 347-263-0254 | Email: info@mavinai.com | Address: 1001 NJ 70, Toms River, NJ

YOUR ROLE:
- Answer questions about Maiven's services confidently and enthusiastically
- Ask about the visitor's business to understand their needs
- Help them see what AI could do for their specific situation
- Encourage booking a conversation or starting the onboarding process at /onboarding
- Collect their name, email/phone, and business name if they want to be contacted
- Keep responses concise (2-4 sentences max) — this is a chat, not an essay
- Be warm, smart, and direct — no corporate speak

If someone asks to book, get started, or wants more info: direct them to /onboarding or suggest they call 347-263-0254.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, leadInfo } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "Our AI is being set up. In the meantime, reach us at info@mavinai.com or call 347-263-0254 — we'd love to hear about your business.",
      });
    }

    const client = new Anthropic({ apiKey });

    const anthropicMessages = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    });

    const reply = response.content[0].type === "text" ? response.content[0].text : "";

    // Save to Supabase if lead info provided
    if (leadInfo?.email || leadInfo?.phone) {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        await supabase.from("chat_leads").insert({
          name: leadInfo.name || null,
          email: leadInfo.email || null,
          phone: leadInfo.phone || null,
          business_name: leadInfo.businessName || null,
          messages,
        });
      }
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({
      reply: "Something went wrong on my end. Please reach us directly at info@mavinai.com or call 347-263-0254.",
    });
  }
}
