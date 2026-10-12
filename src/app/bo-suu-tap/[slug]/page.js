import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AlbumGallery from "@/components/gallery/AlbumGallery";
import { collections, getCollection, packages, siteConfig } from "@/data/site";
import { ArrowRight } from "@/components/ui/Icons";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCollection(params.slug);
  if (!c) return {};
  return {
    title: `${c.name} | ${c.concept}`,
    description: c.desc,
  };
}

export default function CollectionDetailPage({ params }) {
  const c = getCollection(params.slug);
  if (!c) notFound();

  const idx = collections.findIndex((x) => x.slug === c.slug);
  const next = collections[(idx + 1) % collections.length];
  const images = c.images.map((src, i) => ({ src, alt: `${c.name} – ảnh ${i + 1}` }));
  const relatedPackage = packages.find((p) => p.collectionSlug === c.slug) || packages[0];

  return (
    <>
      {/* Header album: ảnh bìa giới hạn chiều cao */}
      <section data-nav-theme="dark" className="relative h-[calc(var(--screen)*0.62)] min-h-[460px] w-full overflow-hidden bg-ink">
        <Image
          src={c.cover}
          alt={`${c.name} – ${c.concept}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: c.coverPos }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/20" />
        <Container wide className="relative flex h-full flex-col justify-end pb-28 lg:pb-36">
          <p className="mb-4 text-xs text-white/60">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/bo-suu-tap" className="hover:text-white">Bộ sưu tập</Link>
            <span className="mx-2">/</span>
            {c.name}
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{c.sub}</p>
          <h1 className="h-display mt-3 text-5xl text-white sm:text-6xl lg:text-7xl">{c.name}</h1>
          <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">{c.concept}</p>
        </Container>
      </section>

      {/* Mô tả + gallery */}
      <section className="bg-cream pb-16 pt-16 lg:pt-24">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
            <aside className="reveal lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">Về bộ sưu tập</p>
              <p className="mt-4 text-justify text-[15px] leading-relaxed text-ink-soft">{c.desc}</p>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white/70 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink-muted">Gói chụp phù hợp</p>
                <p className="mt-2 font-serif text-2xl text-ink">{relatedPackage.name}</p>
                <p className="mt-1 text-xs text-ink-soft">{relatedPackage.sub}</p>
                <Button href="/#pricing" variant="outline" size="sm" arrow className="mt-4">
                  Xem quyền lợi & giá
                </Button>
              </div>

              <Button as="button" data-booking={relatedPackage.id} arrow className="mt-5 w-full">
                Đặt lịch chụp concept này
              </Button>
            </aside>

            <div>
              <AlbumGallery images={images} name={c.name} />
            </div>
          </div>
        </Container>
      </section>

      {/* Album tiếp theo */}
      <section className="bg-cream pb-16">
        <Container wide>
          <Link
            href={`/bo-suu-tap/${next.slug}`}
            className="group reveal flex items-center justify-between gap-6 rounded-[1.75rem] bg-white/70 p-5 transition hover:shadow-card sm:p-6"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-20">
                <Image src={next.cover} alt={next.name} fill sizes="80px" className="object-cover" style={{ objectPosition: next.coverPos }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ink-muted">Bộ sưu tập tiếp theo</p>
                <p className="mt-1 font-serif text-2xl text-ink sm:text-3xl">{next.name}</p>
                <p className="text-xs text-ink-soft">{next.concept}</p>
              </div>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition group-hover:bg-mocha group-hover:text-white">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}
