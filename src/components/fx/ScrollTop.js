"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Nút cuộn lên đầu trang (góc trái dưới), hiện sau khi cuộn qua hero.
export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={toTop}
      aria-label="Lên đầu trang"
      className={cn(
        "fixed bottom-4 left-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/70 text-ink shadow-card backdrop-blur-md transition-all duration-500 hover:bg-mocha hover:text-white sm:bottom-6 sm:left-6 sm:h-12 sm:w-12",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
