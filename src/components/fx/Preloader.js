"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

/**
 * Màn chào khi tải trang: nền kem + logo hiện dần + vạch nạp mảnh, rồi tấm màn kéo lên để lộ landing page.
 * Khi màn bắt đầu kéo lên sẽ phát sự kiện "muse:ready" + thêm class is-ready vào <html>
 * để hero bắt đầu hiệu ứng mở màn đúng lúc (không chạy trước sau tấm màn).
 */
const SHOW_MS = 1400; // thời gian giữ logo
const LEAVE_MS = 900; // thời gian kéo màn

export default function Preloader() {
  const [state, setState] = useState("show"); // show | leave | done

  useEffect(() => {
    const t1 = setTimeout(() => {
      setState("leave");
      document.documentElement.classList.add("is-ready");
      window.dispatchEvent(new Event("muse:ready"));
    }, SHOW_MS);
    const t2 = setTimeout(() => setState("done"), SHOW_MS + LEAVE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "done") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-cream transition-transform ease-[cubic-bezier(.76,0,.24,1)]",
        state === "leave" ? "-translate-y-full duration-[900ms]" : "translate-y-0"
      )}
    >
      <div className={cn("flex flex-col items-center transition-all duration-500", state === "leave" ? "-translate-y-6 opacity-0" : "[animation:fadeUp_.9s_ease-out_both]")}>
        <Logo className="h-16 sm:h-20" />
        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-ink-muted">Wedding Studio · Sài Gòn</p>
        {/* vạch nạp mảnh */}
        <span className="relative mt-7 block h-px w-28 overflow-hidden bg-ink/10">
          <span className="absolute inset-y-0 left-0 w-full origin-left bg-mocha [animation:loadbar_1.3s_cubic-bezier(.22,1,.36,1)_.1s_both]" />
        </span>
      </div>
    </div>
  );
}
