import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">MUSE.</p>
          <p className="mt-3 text-sm text-white/70">{siteConfig.description}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">Liên hệ</p>
          <p className="text-white/70">{siteConfig.address}</p>
          <p className="text-white/70">{siteConfig.phone}</p>
          <p className="text-white/70">{siteConfig.email}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold">Menu</p>
          {siteConfig.nav.map((i) => (
            <a key={i.href} href={i.href} className="block py-1 text-white/70 hover:text-white">
              {i.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
