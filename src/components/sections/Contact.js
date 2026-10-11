"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true); // Demo: nối API/Zalo sau
  }

  return (
    <section id="contact" className="bg-white py-20">
      <Container className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Liên hệ"
            title="Đặt lịch thử váy miễn phí"
            desc="Để lại SĐT, MUSE sẽ gọi xác nhận lịch trong 30 phút (8h–20h hằng ngày)."
          />
          <ul className="space-y-2 text-sm">
            <li>📍 {siteConfig.address}</li>
            <li>📞 {siteConfig.phone}</li>
            <li>✉️ {siteConfig.email}</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-cream p-8 shadow-sm">
          {sent ? (
            <p className="font-serif text-2xl">Cảm ơn nàng! MUSE sẽ liên hệ sớm 💌</p>
          ) : (
            <>
              <label className="block text-sm font-semibold">Tên của nàng
                <input required placeholder="VD: Thu Hà" className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-blush-500" />
              </label>
              <label className="mt-4 block text-sm font-semibold">Số điện thoại
                <input required placeholder="09xx xxx xxx" className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-blush-500" />
              </label>
              <label className="mt-4 block text-sm font-semibold">Ngày muốn thử váy
                <input type="date" className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-blush-500" />
              </label>
              <button className="mt-6 w-full rounded-full bg-charcoal py-3 font-semibold text-white hover:bg-blush-600">
                Gửi yêu cầu
              </button>
            </>
          )}
        </form>
      </Container>
    </section>
  );
}
