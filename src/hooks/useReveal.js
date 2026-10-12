"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Tự động thêm .is-visible khi scroll tới. Dùng: <div className="reveal">
// Chạy lại khi đổi route để các trang con cũng có hiệu ứng.
export default function useReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible), .split:not(.is-visible):not([data-manual])");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Khi đổi kích thước/zoom, các khối vốn display:none (vd. bố cục dự phòng cho viewport cao) có thể hiện ra
    // đúng vị trí đang xem mà observer chưa kịp báo → quét tay: phần tử đang trong viewport thì hiện luôn.
    let t;
    const sweep = () => {
      document.querySelectorAll(".reveal:not(.is-visible), .split:not(.is-visible):not([data-manual])").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    };
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(sweep, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);
}
