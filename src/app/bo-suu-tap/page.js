import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import Button from "@/components/ui/Button";
import { collections, photos, siteConfig } from "@/data/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Calla, Bloom, Watermark } from "@/components/ui/Ornaments";

export const metadata = {
  title: "Bộ sưu tập ảnh cưới",
  description:
    "Khám phá các bộ sưu tập ảnh cưới theo concept của Muse Bridal: phim trường, ngoại cảnh Sài Gòn, vườn hoa và áo dài truyền thống.",
};

// Ảnh ghép làm nền cho khối CTA cuối trang (3 ảnh dọc xếp cạnh nhau)
const CTA_BG = [
  { src: photos.gardenSerene, pos: "center 30%" },
  { src: photos.studioVeilKiss, pos: "center 30%" },
  { src: photos.cityRooftopBride, pos: "center 25%" },
];

export default function CollectionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-12 pt-32 lg:pb-14 lg:pt-40">
        {/* Họa tiết lấp khoảng trống bên phải */}
        <Watermark text="Signature" className="absolute right-[4%] top-36 hidden text-[8rem] text-mocha/[0.06] lg:block xl:text-[10rem]" />

        <Container wide className="relative">
          <p className="mb-4 text-xs text-ink-muted">
            <Link href="/" className="hover:text-mocha">Trang chủ</Link> <span className="mx-2">/</span> Bộ sưu tập
          </p>
          <p className="eyebrow mb-4">Signature Stories</p>
          <h1 className="h-display max-w-4xl text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem]">
            Bộ sưu tập ảnh cưới của&nbsp;<em className="italic text-mocha">Muse.</em>
          </h1>
          <p className="mt-5 max-w-xl text-justify text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Mỗi bộ sưu tập là một concept riêng. Chọn album bạn yêu thích để xem trọn bộ ảnh và lựa chọn gói chụp phù hợp.
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-16">
        <Container wide>
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((c, i) => (
              <Link
                key={c.slug}
                href={`/bo-suu-tap/${c.slug}`}
                className="group reveal relative block h-[380px] overflow-hidden rounded-[1.75rem] bg-sand sm:h-[460px] lg:h-[520px]"
                style={{ "--reveal-delay": `${(i % 2) * 100}ms` }}
              >
                <Image
                  src={c.cover}
                  alt={`${c.name} – ${c.concept}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{ objectPosition: c.coverPos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 sm:p-9">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">{c.sub}</p>
                    <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">{c.name}</h2>
                    <p className="mt-2 max-w-sm text-sm text-white/75">{c.concept}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all group-hover:bg-white group-hover:text-ink">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA: nền ảnh ghép 3 tấm + lớp phủ nâu */}
          <div className="reveal relative mt-16 overflow-hidden rounded-[1.75rem] bg-ink text-white">
            <div className="absolute inset-0 grid grid-cols-3">
              {CTA_BG.map((b, i) => (
                <div key={b.src} className="relative">
                  <Pic src={b.src} alt="" fill sizes="33vw" className="object-cover" style={{ objectPosition: b.pos }} />
                  {i > 0 && <span className="absolute inset-y-0 left-0 w-px bg-white/15" />}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-ink/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <Calla className="absolute -top-4 left-8 w-16 text-blush-200/40" />
            <Bloom className="absolute -bottom-6 right-8 w-24 text-white/20" />

            <div className="relative flex flex-col items-center gap-4 px-6 py-14 text-center sm:py-16">
              <p className="font-script text-3xl text-blush-200">Your story begins here</p>
              <h3 className="h-display text-3xl text-white sm:text-4xl">Chưa biết chọn concept nào?</h3>
              <p className="max-w-md text-sm text-white/75">
                Muse sẽ tư vấn concept phù hợp với câu chuyện và phong cách của hai bạn.
              </p>
              <button
                type="button"
                data-booking
                className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-7 pr-1.5 text-sm font-medium text-ink transition hover:bg-blush"
              >
                Đặt lịch tư vấn miễn phí
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mocha text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
