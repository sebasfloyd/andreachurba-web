"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants/site";

export default function ContactoSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-bg py-20 md:py-28">
      <div className="container max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-light" />
              Contacto
            </p>
            <h2 className="text-light text-[clamp(36px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] mb-7">
              Contame en qué andás.
            </h2>
            <p className="text-light/80 text-[16px] leading-[1.6] max-w-md mb-10">
              Procesos de cambio cultural, coaching de líderes, charlas y workshops. Empezamos por una conversación sin compromiso.
            </p>

            <ul className="space-y-5 mb-10">
              <li>
                <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/60 mb-1">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-[18px] text-light hover:text-violet transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/60 mb-1">WhatsApp</p>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener" className="text-[18px] text-light hover:text-violet transition-colors">
                  +54 9 11 4998 0733
                </a>
              </li>
              <li>
                <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/60 mb-1">Estudio</p>
                <p className="text-[18px] text-light">Buenos Aires, Argentina</p>
              </li>
            </ul>

            <div className="flex gap-5 pt-7 border-t border-line text-[14px] text-light/85">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="hover:text-violet transition-colors">LinkedIn</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="hover:text-violet transition-colors">Instagram</a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener" className="hover:text-violet transition-colors">YouTube</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 p-8 md:p-10 rounded-2xl bg-bgCard border border-line space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Tu nombre" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Empresa o contexto" name="empresa" placeholder="Opcional" />
            <div>
              <label htmlFor="mensaje" className="block text-[10.5px] font-bold uppercase tracking-widewide text-light/60 mb-3">
                Contame un poco
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                required
                className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-light placeholder:text-light/40 focus:border-light focus:outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "ok"}
              className="inline-flex items-center px-8 py-3.5 rounded-full btn-pill-light text-[13.5px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "ok" ? "Mensaje enviado ✓" : status === "loading" ? "Enviando…" : "Enviar mensaje"}
            </button>

            {status === "ok" && (
              <p className="text-[14px] text-violetSoft pt-2">
                Gracias por escribir. Te respondo en los próximos días.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10.5px] font-bold uppercase tracking-widewide text-light/60 mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-light placeholder:text-light/40 focus:border-light focus:outline-none transition-colors"
      />
    </div>
  );
}
