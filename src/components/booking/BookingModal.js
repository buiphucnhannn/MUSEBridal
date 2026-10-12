"use client";

import { useCallback, useEffect, useState } from "react";
import Pic from "@/components/ui/Pic";
import Logo from "@/components/layout/Logo";
import ContactForm from "@/components/sections/ContactForm";
import { booking, siteConfig } from "@/data/site";
import { Check, Close, Messenger, Phone, Zalo } from "@/components/ui/Icons";
import { cn, lockScroll } from "@/lib/utils";

/**
 * Popup đặt lịch dùng chung toàn site.
 * Mở bằng bất kỳ phần tử nào có thuộc tính data-booking (giá trị tuỳ chọn: "muse-basic" | "saigon-basic" để chọn sẵn gói).
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState("");

  const close = useCallback(() => setOpen(false), []);

  // Bắt click trên mọi phần tử có data-booking
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest("[data-booking]");
      if (!el) return;
      e.preventDefault();
      const key = el.getAttribute("data-booking");
      setPreset(booking.presets[key] || "");
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Khoá cuộn + Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open, close]);

  if (!open) return null;

  const quick = [
    { href: siteConfig.zalo, label: "Zalo", Icon: Zalo, ext: true },
    { href: siteConfig.messenger, label: "Messenger", Icon: Messenger, ext: true },
    { href: `tel:${siteConfig.phoneRaw}`, label: siteConfig.phone, Icon: Phone },
  ];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={booking.title}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm [animation:fadeIn_.4s_ease-out_both]" onClick={close} />

      <div className="relative grid max-h-[92svh] w-full max-w-[980px] overflow-hidden rounded-[1.75rem] bg-cream shadow-soft [animation:popIn_.55s_cubic-bezier(.22,1,.36,1)_both] lg:grid-cols-[0.42fr_0.58fr] lg:rounded-[2rem]">
        {/* Cột ảnh (desktop) */}
        <div className="relative hidden lg:block">
          <Pic src={booking.image.src} alt={booking.image.alt} fill sizes="420px" className="object-cover" style={{ objectPosition: booking.image.pos }} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blush-200">{booking.eyebrow}</p>
            <p className="mt-2 font-serif text-[1.7rem] leading-tight">{booking.headline}</p>
            <ul className="mt-4 space-y-2">
              {booking.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-white/85">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blush-200" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cột form */}
        <div className="no-scrollbar relative overflow-y-auto overscroll-contain px-5 py-7 sm:px-9 sm:py-8">
          <button
            onClick={close}
            aria-label="Đóng"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition hover:bg-ink/5 hover:text-ink"
          >
            <Close className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            <Logo className="h-11" />
            <h3 className="mt-4 font-serif text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">{booking.title}</h3>
            <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">{booking.desc}</p>
          </div>

          <div className="mt-6">
            <ContactForm variant="plain" defaultStyle={preset} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/10 pt-5 text-[12px] text-ink-muted">
            <span>Hoặc liên hệ nhanh:</span>
            {quick.map(({ href, label, Icon, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className={cn("inline-flex items-center gap-1.5 text-ink/80 transition hover:text-mocha")}
              >
                <Icon className="h-3.5 w-3.5" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
