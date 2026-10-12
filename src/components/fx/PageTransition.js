"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Chuyển trang mượt:
 * - Bấm link nội bộ sang trang KHÁC: nội dung hiện tại mờ dần + trôi nhẹ lên (≈380ms), rồi mới điều hướng;
 *   trang mới về đầu trang và hiện lên từ dưới (class .page-enter trên <main>).
 * - Link cùng trang có #: để SmoothScroll xử lý (cuộn êm), không can thiệp.
 * - Link có #section sang trang khác: trang mới tải xong sẽ cuộn êm tới section (SmoothScroll lo).
 */
const LEAVE_MS = 380;
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  // Trang mới: hiệu ứng vào
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    main.classList.remove("page-leave");
    main.classList.add("page-enter");
    const t = setTimeout(() => main.classList.remove("page-enter"), 900);
    return () => clearTimeout(t);
  }, [pathname]);

  // Bắt click link nội bộ
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || /^(https?:|mailto:|tel:)/.test(href)) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // cùng trang: có #section → SmoothScroll xử lý; không có # (vd. logo, mục menu của trang hiện tại) → cuộn êm lên đầu
      if (url.pathname === window.location.pathname) {
        if (url.hash) return;
        e.preventDefault();
        if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.8, easing: easeOutExpo });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) history.replaceState(null, "", url.pathname);
        return;
      }

      e.preventDefault();
      const main = document.querySelector("main");
      main?.classList.add("page-leave");
      window.__lenis?.stop();
      // prefetch để trang mới sẵn sàng khi hiệu ứng rời kết thúc
      try {
        router.prefetch(url.pathname);
      } catch {}
      setTimeout(() => {
        window.__lenis?.start();
        router.push(url.pathname + url.search + url.hash);
      }, LEAVE_MS);
    };
    // Pha capture: chạy trước handler của <Link> để Next không tự điều hướng/nhảy trang
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
