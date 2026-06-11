"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HumanQuoteSection() {
  return (
    <section className="bg-bg">
      <div className="container max-w-[1440px] py-4">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden">
          <div className="relative bg-violet min-h-[480px] md:min-h-[600px]">
            <Image
              src="/images/andrea/andrea-bw.jpg"
              alt="Andrea Churba"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violetDeep/40 via-violet/20 to-transparent" />

            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col h-full justify-end min-h-[480px] md:min-h-[600px]">
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widewide text-light/90 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-light" />
                TEDxBarrioSanNicolas · 2022
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-light text-[clamp(28px,4.5vw,68px)] font-semibold tracking-tightest leading-[1.05] max-w-4xl mb-10"
              >
                &ldquo;Nosotros somos los narradores del relato que nos contamos. Por eso tenemos el poder de modificarlo.&rdquo;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-6 pt-6 border-t border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-light/15 backdrop-blur text-light text-[12px] font-bold border border-white/20">
                    AC
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-light leading-tight">Andrea Churba</p>
                    <p className="text-[12px] text-light/70 leading-tight mt-0.5">Identidad y Relato</p>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=WHAibWX22mw"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-light text-violetDeep font-semibold text-[13px] hover:bg-light/95 transition-colors"
                >
                  Mirar el TED
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
