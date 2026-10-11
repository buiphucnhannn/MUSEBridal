"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-serif text-xl tracking-wide">
          MUSE<span className="text-blush-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-blush-600">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-charcoal px-5 py-2.5 font-semibold text-white hover:bg-blush-600"
          >
            Đặt lịch thử váy
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-label="Menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-cream px-4 py-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
