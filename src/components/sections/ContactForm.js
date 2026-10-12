"use client";

import { useEffect, useState } from "react";
import { contact, siteConfig } from "@/data/site";
import { Check } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * Form đăng ký tư vấn / đặt lịch.
 * variant: "card" (thẻ trắng) | "dark" (ô kính tối trên nền nâu) | "plain" (ô trắng trên nền kem, dùng trong popup)
 * defaultStyle: phong cách chọn sẵn (vd. mở popup từ gói Muse Basic)
 * Demo: khi gửi sẽ mở Zalo kèm nội dung đã soạn; sau này nối API/Google Sheet tại handleSubmit.
 */
export default function ContactForm({ variant = "card", defaultStyle = "", className = "", onSent }) {
  const dark = variant === "dark";
  const field = dark ? "field-dark" : variant === "plain" ? "field-plain" : "field";
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", shootDate: "", style: defaultStyle, note: "" });

  useEffect(() => {
    setForm((f) => ({ ...f, style: defaultStyle }));
  }, [defaultStyle]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = [
      `Xin chào Muse Bridal, mình muốn đăng ký tư vấn.`,
      `Họ tên: ${form.name}`,
      `SĐT: ${form.phone}`,
      form.date && `Ngày cưới dự kiến: ${form.date}`,
      form.shootDate && `Ngày chụp mong muốn: ${form.shootDate}`,
      form.style && `Phong cách mong muốn: ${form.style}`,
      form.note && `Lời nhắn: ${form.note}`,
    ]
      .filter(Boolean)
      .join("\n");
    // TODO: thay bằng gọi API / Google Sheets khi có backend
    window.open(`${siteConfig.zalo}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
    onSent?.();
  };

  // ô ngày: hiện placeholder, khi focus mới đổi sang type=date
  const dateProps = (key, placeholder) => ({
    className: field,
    placeholder,
    type: "text",
    onFocus: (e) => (e.target.type = "date"),
    onBlur: (e) => !e.target.value && (e.target.type = "text"),
    value: form[key],
    onChange: update(key),
  });

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-[1.5rem] p-8 text-center sm:p-10",
          dark ? "border border-white/15 bg-white/[0.06] text-white" : "bg-white text-ink",
          variant === "card" && "shadow-soft",
          className
        )}
      >
        <div className={cn("mx-auto flex h-14 w-14 items-center justify-center rounded-full", dark ? "bg-white text-mocha" : "bg-blush text-mocha")}>
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl">Cảm ơn {form.name || "bạn"}!</h3>
        <p className={cn("mt-2 text-sm", dark ? "text-white/70" : "text-ink-soft")}>
          Muse Bridal đã nhận thông tin và sẽ liên hệ lại sớm nhất qua số {form.phone || "bạn để lại"}.
        </p>
        <button onClick={() => setSent(false)} className={cn("mt-6 text-xs underline underline-offset-4", dark ? "text-blush-200" : "text-mocha")}>
          Gửi thêm yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(variant === "card" && "rounded-[1.75rem] bg-white/85 p-6 shadow-soft backdrop-blur sm:p-8", className)}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={field} placeholder="Họ và tên *" required value={form.name} onChange={update("name")} />
        <input
          className={field}
          placeholder="Số điện thoại *"
          type="tel"
          inputMode="tel"
          pattern="[0-9+\s.-]{8,15}"
          required
          value={form.phone}
          onChange={update("phone")}
        />
        <input {...dateProps("date", "Ngày cưới dự kiến")} />
        <input {...dateProps("shootDate", "Ngày chụp mong muốn")} />
        <select
          className={cn(field, !form.style && (dark ? "text-white/45" : "text-ink-muted"), "sm:col-span-2")}
          value={form.style}
          onChange={update("style")}
        >
          <option value="">Phong cách chụp mong muốn</option>
          {contact.styles.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <textarea
          className={cn(field, "min-h-[84px] resize-none overflow-hidden sm:col-span-2")}
          placeholder="Lời nhắn cho Muse..."
          rows={3}
          value={form.note}
          onChange={update("note")}
          onInput={(e) => {
            // tự giãn theo nội dung, không bao giờ co lại nhỏ hơn kích thước người dùng đã kéo
            const el = e.currentTarget;
            if (el.scrollHeight > el.clientHeight) el.style.height = el.scrollHeight + 2 + "px";
          }}
        />
      </div>
      <div className={cn("mt-4 flex flex-col items-center gap-3", variant !== "plain" && "sm:flex-row sm:justify-between")}>
        <button
          type="submit"
          className={cn(
            "inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition",
            variant !== "plain" && "sm:w-auto",
            dark ? "bg-white text-ink hover:bg-blush" : "bg-mocha text-white hover:bg-mocha-dark"
          )}
        >
          Đăng ký tư vấn / đặt lịch chụp
        </button>
        <p className={cn("text-center text-[11px]", dark ? "text-white/45" : "text-ink-muted")}>Muse phản hồi trong 24h · Thông tin được bảo mật.</p>
      </div>
    </form>
  );
}
