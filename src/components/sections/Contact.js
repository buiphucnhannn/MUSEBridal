import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import Parallax from "@/components/fx/Parallax";
import { contact, siteConfig } from "@/data/site";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * Khối mời gọi cuối trang: tiêu đề lớn ở giữa, các polaroid ảnh cưới xoè quanh (parallax),
 * nút "Đặt lịch tư vấn" mở popup (data-booking). Form không còn nằm trong trang.
 */
export default function Contact() {
  const [p1, p2, p3, p4] = contact.polaroids;
  const spots = [
    { p: p1, cls: "left-[4%] top-[14%] w-[15vw] max-w-[260px] -rotate-[7deg]", speed: 0.08 },
    { p: p2, cls: "left-[11%] bottom-[9%] w-[11.5vw] max-w-[200px] rotate-[5deg]", speed: -0.05 },
    { p: p3, cls: "right-[5%] top-[12%] w-[12vw] max-w-[210px] rotate-[6deg]", speed: -0.06 },
    { p: p4, cls: "right-[11%] bottom-[10%] w-[14vw] max-w-[240px] -rotate-[4deg]", speed: 0.07 },
  ];

  const Polaroid = ({ p, className = "", sizes = "260px" }) => (
    <div className={cn("polaroid", className)}>
      <div className={cn("relative w-full overflow-hidden", p.square ? "aspect-square" : "aspect-[4/5]")}>
        <Pic src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: p.pos }} />
      </div>
      <p className="mt-2 text-center font-script text-xl leading-none text-ink-soft">{p.caption}</p>
    </div>
  );

  return (
    <section id="contact" data-nav-theme="dark" className="screen relative flex items-center justify-center overflow-hidden bg-ink py-16 text-white lg:py-24">
      {/* ánh sáng nền */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mocha/35 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[360px] w-[360px] rounded-full bg-blush/10 blur-[140px]" />

      {/* Polaroid xoè quanh (desktop) */}
      {spots.map(({ p, cls, speed }, i) => (
        <Parallax key={p.src} speed={speed} className={cn("absolute hidden lg:block", cls)}>
          <div className="reveal" data-reveal="scale" style={{ "--reveal-delay": `${150 + i * 120}ms` }}>
            <Polaroid p={p} />
          </div>
        </Parallax>
      ))}

      {/* Nội dung giữa */}
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center">

        <p className="reveal font-script text-3xl text-blush-200 sm:text-4xl">Your story begins here</p>
        <p className="eyebrow reveal mt-3 text-white/60" style={{ "--reveal-delay": "80ms" }}>{contact.eyebrow}</p>
        <SplitText
          text={contact.title}
          className="h-display mt-5 text-[2.5rem] text-white sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.6rem]"
        />

        {/* mobile: 3 polaroid nhỏ ngay dưới tiêu đề */}
        <div className="mt-8 flex items-end justify-center gap-3 lg:hidden">
          <div className="reveal w-[26vw] max-w-[150px] -rotate-6"><Polaroid p={p2} sizes="150px" /></div>
          <div className="reveal w-[30vw] max-w-[170px] translate-y-3" style={{ "--reveal-delay": "100ms" }}><Polaroid p={p1} sizes="170px" /></div>
          <div className="reveal w-[26vw] max-w-[150px] rotate-6" style={{ "--reveal-delay": "200ms" }}><Polaroid p={p3} sizes="150px" /></div>
        </div>
        <p className="reveal mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base" style={{ "--reveal-delay": "250ms" }}>
          {contact.desc}
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3" style={{ "--reveal-delay": "350ms" }}>
          <button
            type="button"
            data-booking
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-[15px] font-medium text-ink shadow-soft transition hover:bg-blush"
          >
            Đặt lịch tư vấn miễn phí
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mocha text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>

        <ul className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[12px] text-white/60" style={{ "--reveal-delay": "450ms" }}>
          {contact.perks.map((k) => (
            <li key={k} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-blush-200" /> {k}
            </li>
          ))}
        </ul>
        <p className="reveal mt-6 text-[11px] uppercase tracking-[0.25em] text-white/35" style={{ "--reveal-delay": "500ms" }}>
          {siteConfig.openHours} · {siteConfig.addressShort}
        </p>
      </div>
    </section>
  );
}
