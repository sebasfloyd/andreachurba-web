import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";

const Body = {
  parse(input: unknown) {
    if (typeof input !== "object" || input === null) throw new Error("Invalid body");
    const o = input as Record<string, unknown>;
    const required = (k: string) => {
      const v = o[k];
      if (typeof v !== "string" || v.trim().length === 0) throw new Error(`Falta el campo ${k}`);
      if (v.length > 5000) throw new Error(`Campo ${k} demasiado largo`);
      return v.trim();
    };
    const optional = (k: string) => {
      const v = o[k];
      return typeof v === "string" ? v.trim().slice(0, 1000) : "";
    };
    const name = required("name");
    const email = required("email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Email inválido");
    const mensaje = required("mensaje");
    const empresa = optional("empresa");
    return { name, email, mensaje, empresa };
  },
};

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rl = rateLimit({ key: `contact:${ip}`, limit: 5, windowMs: 60 * 60 * 1000 });
    if (!rl.ok) {
      const retryAfter = Math.ceil((rl.resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { error: "Demasiados intentos. Probá de nuevo en un rato." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }

    const json = await req.json().catch(() => null);
    const data = Body.parse(json);

    if ((data as unknown as { website?: string }).website) {
      return NextResponse.json({ ok: true }); // honeypot — pretend success
    }

    const RESEND_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_EMAIL_TO || "hola@andreachurba.com.ar";
    const FROM = process.env.CONTACT_EMAIL_FROM || "Web Andrea Churba <onboarding@resend.dev>";

    if (!RESEND_KEY) {
      // Sin API key configurada — devolvemos OK para no romper UX, pero loggeamos
      console.warn("[/api/contact] RESEND_API_KEY no configurada. Mensaje recibido pero no enviado.");
      console.log("[/api/contact] payload:", data);
      return NextResponse.json({ ok: true, queued: true });
    }

    const resend = new Resend(RESEND_KEY);
    const subject = `Nuevo mensaje desde la web · ${data.name}`;
    const html = `
      <div style="font-family:-apple-system,system-ui,sans-serif;color:#1A1A1A;line-height:1.5">
        <h2 style="margin:0 0 16px;font-size:20px">Nuevo mensaje desde andreachurba.com</h2>
        <p style="margin:0 0 8px"><strong>De:</strong> ${escapeHtml(data.name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${data.email}">${escapeHtml(data.email)}</a></p>
        ${data.empresa ? `<p style="margin:0 0 8px"><strong>Empresa / contexto:</strong> ${escapeHtml(data.empresa)}</p>` : ""}
        <p style="margin:24px 0 8px"><strong>Mensaje:</strong></p>
        <div style="background:#F7F5F2;border-left:3px solid #6B4FA3;padding:14px 18px;border-radius:6px;white-space:pre-wrap">${escapeHtml(data.mensaje)}</div>
        <p style="margin:24px 0 0;font-size:12px;color:#666">Respondé directo a este mail para contactar a ${escapeHtml(data.name)}.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.error("[/api/contact] resend error:", error);
      return NextResponse.json({ error: "No pude enviar el mensaje" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Bad request";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
