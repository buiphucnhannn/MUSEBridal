"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

/**
 * Vị trí "đẹp nhất" khi cuộn tới một khối:
 * - Khối cao đúng 1 màn hình (.screen) → mép trên khối về 0 để KÍN màn hình (header kính nổi phủ lên đệm trống).
 *   Nếu nội dung đầu tiên nằm quá sát header (màn thấp) → dừng sớm hơn để nội dung cách mép trên ≥ CLEAR.
 * - Khối khác (vd. bảng giá trong trang Dịch vụ) → cuộn sao cho nội dung đầu tiên cách mép trên đúng CLEAR.
 * - Luôn kẹp trong [0, max] → khối cuối trang căn đáy.
 * Toạ độ tính bằng offsetTop (bỏ qua transform của hiệu ứng hiện dần / chuyển trang) nên không bị lệch.
 */
const CLEAR = 140; // header 84px + 56px thở
const pageTop = (el) => {
  let y = 0;
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop;
  return y;
};
// Khoảng cách từ mép trên khối tới nội dung đầu tiên (đi theo chuỗi con đơn, bỏ phần tử absolute/ẩn)
function contentTop(el) {
  let node = el;
  for (let i = 0; i < 6; i++) {
    const kids = [...node.children].filter((k) => {
      const cs = getComputedStyle(k);
      return cs.position !== "absolute" && cs.position !== "fixed" && cs.display !== "none" && k.offsetHeight > 0;
    });
    if (!kids.length) break;
    if (kids.length === 1) {
      node = kids[0];
      continue;
    }
    return Math.min(...kids.map(pageTop)) - pageTop(el);
  }
  return pageTop(node) - pageTop(el);
}
function scrollToTarget(lenis, el, force = false) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const elTop = pageTop(el);
  const ct = contentTop(el);
  const isScreen = el.classList.contains("screen") || el.id === "top";
  let s = isScreen ? elTop - Math.max(0, CLEAR - ct) : elTop + ct - CLEAR;
  s = Math.max(0, Math.min(s, max));
  lenis.scrollTo(s, { duration: 1.8, easing: easeOutExpo, force });
}
// easing "expo out": khởi đầu nhanh, về đích rất êm (dùng cho cuộn tới anchor)
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Cuộn mượt toàn trang (Lenis) — cảm giác chậm, có quán tính như các site Framer.
 * - lerp thấp: trang "đuổi theo" con lăn chậm hơn → mềm, trôi nhẹ.
 * - wheelMultiplier < 1: mỗi nấc cuộn đi quãng ngắn hơn → chậm rãi, dễ ngắm ảnh.
 * - Touch (điện thoại) giữ cuộn native để không bị khựng.
 * Luôn bật (kể cả khi hệ điều hành chọn giảm chuyển động) vì đây là trải nghiệm chủ đích của site.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 0.78,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.2,
      easing: easeOutExpo,
      duration: 1.6,
      // Vẫn cuộn mượt kể cả khi Windows/macOS bật "giảm chuyển động" (mặc định Lenis sẽ tắt smooth)
      respectReducedMotion: false,
    });
    window.__lenis = lenis;

    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Cuộn êm tới anchor (#id) kể cả link dạng "/#id"
    // Đăng ký ở pha capture để chạy TRƯỚC handler của <Link> (Next bỏ qua điều hướng khi đã preventDefault)
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      const hashIdx = href.indexOf("#");
      if (hashIdx === -1) return;
      const path = href.slice(0, hashIdx) || window.location.pathname;
      const hash = href.slice(hashIdx);
      if (path !== window.location.pathname && path !== "/" + window.location.pathname.replace(/^\//, "")) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, "", hash);
      // Nếu bấm từ menu mobile: menu đang khoá cuộn + Lenis đang dừng → chờ menu đóng (bỏ khoá) rồi mới cuộn.
      // force: Lenis không bỏ qua lệnh cuộn kể cả khi vừa được start lại.
      setTimeout(() => scrollToTarget(lenis, target, true), 60);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Đổi trang: về đầu trang ngay (Lenis giữ vị trí cũ nếu không ép); có hash thì cuộn tới section
  useEffect(() => {
    if (!window.location.hash) {
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
      return;
    }
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    // về đầu trang trước (tránh nhảy), rồi cuộn êm tới section sau khi trang đã hiện
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
    const t = setTimeout(() => {
      if (window.__lenis) scrollToTarget(window.__lenis, target);
      else target.scrollIntoView({ behavior: "smooth" });
    }, 450);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
