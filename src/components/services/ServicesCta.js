import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import { servicesPage, siteConfig } from "@/data/site";
import { ArrowRight, Zalo } from "@/components/ui/Icons";

// CTA cuối trang: nền ghép 3 ảnh + lớp phủ nâu, nút mở popup đặt lịch.
export default function ServicesCta() {
  const c = servicesPage.cta;
  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-ink py-16 text-white lg:py-24">
      <div className="absolute inset-0 grid grid-cols-3">
        {c.bg.map((src, i) => (
          <div key={src} className="relative">
            <Pic src={src} alt="" fill sizes="34vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
            {i > 0 && <span className="absolute inset-y-0 left-0 w-px bg-white/15" />}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      <Container wide className="relative flex flex-col items-center text-center">
        <p className="reveal font-script text-3xl text-blush-200">Your story begins here</p>
        <h2 className="h-display reveal mt-4 max-w-3xl text-[2.3rem] text-white [text-wrap:balance] sm:text-[3rem]" style={{ "--reveal-delay": "100ms" }}>
          {c.title.replace(" hai bạn?", "")}&nbsp;<span className="whitespace-nowrap">hai bạn?</span>
        </h2>
        <p className="reveal mt-4 max-w-md text-sm text-white/75" style={{ "--reveal-delay": "200ms" }}>{c.desc}</p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3" style={{ "--reveal-delay": "300ms" }}>
          <button type="button" data-booking className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-7 pr-1.5 text-sm font-medium text-ink transition hover:bg-blush">
            Đặt lịch tư vấn miễn phí
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mocha text-white transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-4 w-4" /></span>
          </button>
          <a href={siteConfig.zalo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm text-white transition hover:bg-white hover:text-ink">
            <Zalo className="h-4 w-4" /> Nhắn Zalo {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
