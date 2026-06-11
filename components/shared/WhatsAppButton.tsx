"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/constants/site";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener"
          aria-label="Escribir por WhatsApp"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="fixed bottom-5 right-5 z-30 group flex items-center gap-3 px-4 py-3.5 rounded-full bg-light text-ink shadow-hover hover:scale-105 transition-transform"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] text-light">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 14.2c-.3-.2-1.7-.9-2-1s-.4-.2-.6.2-.7.9-.8 1.1-.3.2-.6 0c-1.8-.7-3-2.3-3.5-3.1-.2-.4 0-.5.2-.7l.4-.4c.1-.1.2-.3.3-.4s.1-.3 0-.4-.6-1.6-.9-2.2-.5-.5-.6-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3 2 3.2 5 4.5c.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
              <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.1-1.6c1.7 1 3.7 1.5 5.8 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.4zM12 21.9h-.1c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.6 1 1-3.5-.3-.4C2.4 15.8 1.9 14 1.9 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7 .1 5.6-4.4 10-9.8 10z" />
            </svg>
          </span>
          <AnimatePresence>
            {hover && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[13px] font-semibold whitespace-nowrap overflow-hidden"
              >
                Escribime
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
