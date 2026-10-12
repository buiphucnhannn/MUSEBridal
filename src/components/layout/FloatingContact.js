"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { Messenger, Phone, ZaloWord } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

// Cụm nút liên hệ nhanh: Zalo / Messenger / Gọi — hiện sau khi cuộn qua hero.
export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: siteConfig.zalo, label: "Chat Zalo", Icon: ZaloWord, cls: "bg-[#0068FF]", iconCls: "h-7 w-7" },
    {
      href: siteConfig.messenger,
      label: "Messenger",
      Icon: Messenger,
      cls: "bg-[linear-gradient(135deg,#00B2FF_0%,#006AFF_100%)]",
      iconCls: "h-[22px] w-[22px]",
    },
    { href: `tel:${siteConfig.phoneRaw}`, label: `Gọi ${siteConfig.phone}`, Icon: Phone, cls: "bg-mocha", iconCls: "h-5 w-5", tel: true, pulse: true },
  ];

  return (
    <div
      className={cn(
        "fixed bottom-4 right-3 z-40 flex flex-col gap-2 transition-all duration-500 sm:bottom-6 sm:right-6 sm:gap-3",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      {items.map(({ href, label, Icon, cls, iconCls, tel, pulse }) => (
        <a
          key={label}
          href={href}
          target={tel ? undefined : "_blank"}
          rel={tel ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="group flex items-center justify-end gap-3"
        >
          <span className="pointer-events-none translate-x-2 rounded-full bg-ink px-3 py-1.5 text-xs text-white opacity-0 shadow-card transition-all group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </span>
          <span className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
            {/* sóng lan toả 1 tầng, chậm và nhẹ */}
            {pulse && <span className="absolute inset-0 rounded-full bg-mocha/60 [animation:ripple_3s_ease-out_infinite]" aria-hidden />}
            <span
              className={cn(
                "relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-soft transition-transform group-hover:scale-105 sm:h-12 sm:w-12",
                cls
              )}
            >
              <Icon className={iconCls} />
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
