import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const { answers, messages } = await req.json();

    const [businessName, businessDesc, mainGoal, existingWebsite, contactInfo] = answers || [];

    const supabase = getSupabaseAdmin();
    if (supabase) {
      await supabase.from("onboarding_submissions").insert({
        business_name: businessName || null,
        notes: [businessDesc, mainGoal, existingWebsite].filter(Boolean).join(" | "),
        current_website: existingWebsite?.startsWith("http") ? existingWebsite : null,
        email: contactInfo?.includes("@") ? contactInfo : null,
        phone: !contactInfo?.includes("@") ? contactInfo : null,
        messages: messages || [],
        status: "new",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Onboarding API error:", err);
    return NextResponse.json({ ok: false });
  }
}
