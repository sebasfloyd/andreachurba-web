"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const beneficios = [
    "Ideas frescas sobre cambio, liderazgo y relato",
    "Anticipo del próximo libro Liderar los cambios",
    "Avisos de charlas y workshops abiertos",
    "Reflexiones que no salen en los diarios",
  ];

  return (
    <section className="bg-bg py-4">
      <div className="container max-w-[1440px]">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-violetDeep min-h-[480px]">
          <Image
            src="/images/andrea/andrea-azul.jpg"
            alt="Andrea Churba"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet/30 via-violetDeep/40 to-bg/20" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9 }}
            >
              <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-5">
                <Mail size={12} />
                Newsletter de Andrea
              </p>
              <h2 className="text-light text-[clamp(34px,5vw,64px)] font-semibold tracking-tightest leading-[1.02] mb-5 text-balance">
                Recibí lo que voy pensando, directo a tu inbox.
              </h2>
              <p className="text-[16px] text-light/85 leading-[1.55] max-w-md">
                Cada tanto, una idea sobre cambio, liderazgo o relato identitario. Sin frecuencia fija. Sin spam. Te podés ir cuando quieras.
              </p>

              <ul className="mt-8 space-y-3">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14.5px] text-light/90">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-light/15 text-light shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex flex-col justify-center"
            >
              {status === "ok" ? (
                <div className="rounded-2xl bg-light/10 backdrop-blur p-8 border border-white/15 text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light text-violet mb-5">
                    <Check size={26} strokeWidth={2.5} />
                  </span>
                  <h3 className="text-light text-[22px] font-semibold mb-2">¡Listo!</h3>
                  <p className="text-[14px] text-light/85">
                    Revisá tu email para confirmar la suscripción.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-[10.5px] font-bold uppercase tracking-widewide text-light/65 mb-2.5">
                      Tu email
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hola@ejemplo.com"
                      className="w-full rounded-xl border border-white/25 bg-light/10 backdrop-blur px-4 py-3.5 text-[15px] text-light placeholder:text-light/45 focus:border-light focus:bg-light/15 focus:outline-none transition-all"
                      disabled={status === "loading"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center px-7 py-4 rounded-full btn-pill-light text-[13.5px] disabled:opacity-60"
                  >
                    {status === "loading" ? "Suscribiendo…" : "Suscribirme"}
                  </button>
                  <p className="text-[12px] text-light/55 text-center">
                    Salís cuando quieras. Tu mail no se comparte.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
