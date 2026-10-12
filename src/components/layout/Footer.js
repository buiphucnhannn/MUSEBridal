import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { siteConfig } from "@/data/site";
import { Facebook, Instagram, MapPin, Phone, Tiktok, Youtube, Clock } from "@/components/ui/Icons";

// Footer nền nâu trầm (ink) — đồng bộ với khối liên hệ & popup, chữ kem.
export default function Footer() {
  const socials = [
    { Icon: Facebook, href: siteConfig.facebook, label: "Facebook" },
    { Icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
    { Icon: Youtube, href: siteConfig.youtube, label: "YouTube" },
    { Icon: Tiktok, href: siteConfig.tiktok, label: "TikTok" },
  ];

  return (
    <footer data-nav-theme="dark" className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-mocha/30 blur-[140px]" />

      <Container wide className="relative py-12 lg:py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.3fr_0.7fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Muse Bridal — về trang chủ" className="inline-block transition-opacity hover:opacity-80">
              <Logo className="h-14" light />
            </Link>
            <p className="mt-5 max-w-xs text-justify text-sm leading-relaxed text-cream/70">
              Nơi những câu chuyện tình yêu được lưu giữ qua từng khung hình.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-blush-200 hover:bg-blush-200 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="mb-5 font-serif text-lg text-white">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blush-200" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="transition hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blush-200" />
                <span>
                  {siteConfig.addressShort}
                  <br />
                  <a
                    href={siteConfig.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blush-200 underline-offset-4 hover:underline"
                  >
                    Xem địa chỉ trên Google Maps
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blush-200" />
                <span>{siteConfig.openHours}</span>
              </li>
            </ul>
          </div>

          {/* Bản đồ */}
          <div>
            <h4 className="mb-5 font-serif text-lg text-white">Bản đồ</h4>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
              <iframe
                title="Bản đồ Muse Bridal"
                src={siteConfig.mapsEmbed}
                className="h-44 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="mb-5 font-serif text-lg text-white">Menu</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {siteConfig.nav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="inline-block py-1 transition hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container wide className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="inline-block py-1 transition hover:text-white">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#" className="inline-block py-1 transition hover:text-white">Điều khoản sử dụng</a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
