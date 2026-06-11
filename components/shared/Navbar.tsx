"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-line">
        <div className="container max-w-[1440px] flex h-16 md:h-[72px] items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="text-light text-[15px] tracking-widewide font-semibold uppercase">
              Andrea Churba
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13.5px] font-medium text-light/80 hover:text-light hover:bg-light/5 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center px-5 py-2.5 rounded-full btn-pill-light text-[13px] font-semibold"
            >
              Empezar
            </a>

            <button
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-light"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-line">
          <div
            className="h-full bg-violet origin-left"
            style={{
              transform: `scaleX(${progress})`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 bg-bg border-b border-line lg:hidden"
          >
            <nav className="container py-6 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="py-4 text-[18px] font-medium text-light border-b border-line/50 last:border-0 hover:text-violet transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-full btn-pill-light text-[14px]"
              >
                Empezar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
