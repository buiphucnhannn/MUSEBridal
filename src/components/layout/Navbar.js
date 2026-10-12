"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn, lockScroll } from "@/lib/utils";
import { ArrowRight, Close } from "@/components/ui/Icons";
import Logo from "@/components/layout/Logo";

/**
 * Header dạng "viên thuốc" kính mờ nổi cách mép (tham khảo bellairetravels.com):
 * - trên hero (ảnh tối) là kính tối chữ trắng; cuộn xuống chuyển sang kính kem chữ nâu.
 * - menu giữa có ô active, CTA kèm vòng tròn mũi tên.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Dò section nằm sau header: phần tử có data-nav-theme="dark" phủ qua tâm header → kính tối chữ trắng
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = 52; // tâm header (top 20px + 64/2)
      let theme = "light";
      document.querySelectorAll("[data-nav-theme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) theme = el.dataset.navTheme;
      });
      setOnDark(theme === "dark");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const t = setTimeout(update, 400); // sau khi ảnh/section ổn định
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    return () => lockScroll(false);
  }, [open]);

  const dark = onDark && !open; // kính tối khi nền phía sau tối
  const isActive = (href) => {
    if (href === "/") return isHome;
    const path = href.split("#")[0];
    return path && path !== "/" && pathname.startsWith(path);
  };

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-5">
      <div
        className={cn(
          "mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between rounded-full border pl-5 pr-2 backdrop-blur-xl transition-all duration-500 sm:pl-7",
          dark
            ? "border-white/15 bg-ink/40 text-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
            : "border-white/70 bg-cream/80 text-ink shadow-[0_12px_40px_-24px_rgba(43,36,32,0.35)]"
        )}
      >
        <Link href="/" aria-label="Muse Bridal — trang chủ" className="shrink-0">
          <Logo className="h-8 sm:h-9" light={dark} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300",
                  active
                    ? dark
                      ? "bg-white text-ink"
                      : "bg-mocha text-white"
                    : dark
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-ink/75 hover:bg-mocha/10 hover:text-mocha"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-booking
            className={cn(
              "group hidden items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-[13px] font-medium transition-all duration-300 md:inline-flex",
              dark ? "bg-white text-ink hover:bg-blush" : "bg-mocha text-white hover:bg-mocha-dark"
            )}
          >
            Đặt lịch tư vấn
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
                dark ? "bg-mocha text-white" : "bg-white text-mocha"
              )}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden",
              dark ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5"
            )}
          >
            {open ? (
              <Close />
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile toàn màn hình */}
      <div
        className={cn(
          "fixed inset-0 -z-10 bg-cream transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex h-full flex-col px-7 pb-8 pt-28">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-ink/10 py-4 font-serif text-3xl text-ink transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            >
              {item.label}
              <ArrowRight className="h-5 w-5 text-mocha" />
            </Link>
          ))}
          <button
            type="button"
            data-booking
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-mocha px-6 py-4 text-sm font-medium text-white"
          >
            Đặt lịch tư vấn <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-auto text-xs text-ink-muted">
            Hotline / Zalo:{" "}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-mocha">
              {siteConfig.phone}
            </a>
          </p>
        </nav>
      </div>
    </header>
  );
}
