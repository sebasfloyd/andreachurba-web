import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    if (!json || typeof json !== "object") {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    const email = (json as { email?: unknown }).email;
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const KIT_API_KEY = process.env.KIT_API_KEY;
    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (KIT_API_KEY && KIT_FORM_ID) {
      // Kit (ConvertKit) v3 API
      const r = await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: KIT_API_KEY, email }),
      });
      if (!r.ok) {
        const body = await r.json().catch(() => ({}));
        console.error("[/api/newsletter] kit error:", body);
        return NextResponse.json({ error: "No pude suscribirte. Probá de nuevo." }, { status: 502 });
      }
      return NextResponse.json({ ok: true, provider: "kit" });
    }

    // Sin provider configurado: aceptar y loggear para que Andrea agregue manualmente
    console.warn("[/api/newsletter] KIT no configurado. Email recibido:", email);

    // Si Resend está configurado, mandar un mail interno avisando del nuevo suscriptor
    const RESEND_KEY = process.env.RESEND_API_KEY;
    if (RESEND_KEY) {
      const TO = process.env.CONTACT_EMAIL_TO || "hola@andreachurba.com.ar";
      const FROM = process.env.CONTACT_EMAIL_FROM || "Web Andrea Churba <onboarding@resend.dev>";
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(RESEND_KEY);
        await resend.emails.send({
          from: FROM,
          to: TO,
          subject: `[Newsletter] Nuevo suscriptor: ${email}`,
          html: `<p>Nuevo suscriptor desde el newsletter de andreachurba.com:</p><p><strong>${email}</strong></p><p>Agregalo a tu lista de Kit / Mailchimp manualmente.</p>`,
        });
      } catch (e) {
        console.error("[/api/newsletter] resend fallback error:", e);
      }
    }

    return NextResponse.json({ ok: true, queued: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Bad request";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
