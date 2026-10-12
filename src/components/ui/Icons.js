// Bộ icon SVG inline (stroke 1.5) — dùng chung toàn site
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ArrowRight = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

export const Close = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronLeft = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const Phone = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const MapPin = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Clock = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Dress = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3c0 2 1 3.5 3 3.5S15 5 15 3M9 3l-1.5 6 2 2-3.5 8c2 1.5 4 2 6 2s4-.5 6-2L14.5 11l2-2L15 3" />
  </svg>
);

export const Brush = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M14 4l6 6-8 8H6v-6l8-8z" />
    <path d="M12 6l6 6M6 18l-2 2" />
  </svg>
);

export const Camera = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const Album = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 16l4-4 3 3 3-4 6 6" />
    <circle cx="15" cy="9" r="1.5" />
  </svg>
);

export const Play = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const Facebook = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4V14h2.8v8h3.3z" />
  </svg>
);

export const Instagram = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={1.8}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const Tiktok = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.5 3c.3 2.2 1.6 3.6 3.9 3.8v3c-1.5 0-2.8-.5-3.9-1.3v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V3h3z" />
  </svg>
);

export const Youtube = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.6 6 12 6 12 6s-6.6 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a2.6 2.6 0 0 0 1.8 1.8C5.4 18 12 18 12 18s6.6 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 14.7V9.3l4.6 2.7L10 14.7z" />
  </svg>
);

// Logo Messenger (bong bóng + tia sét cắt rỗng) — tô màu theo currentColor
export const Messenger = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.24 0 0 4.95 0 11.64c0 3.5 1.43 6.52 3.77 8.6.2.18.31.42.32.69l.07 2.14c.02.68.72 1.12 1.35.85l2.39-1.05c.2-.09.43-.11.64-.05 1.09.3 2.26.46 3.46.46 6.76 0 12-4.95 12-11.64S18.76 0 12 0zm7.2 8.96l-3.52 5.59c-.56.89-1.76 1.11-2.6.48l-2.8-2.1a.72.72 0 0 0-.87 0l-3.78 2.87c-.51.38-1.17-.22-.83-.75l3.52-5.59c.56-.89 1.76-1.11 2.6-.48l2.8 2.1c.26.2.61.2.87 0l3.78-2.87c.51-.38 1.17.22.83.75z"
    />
  </svg>
);

// Huy hiệu Zalo cỡ nhỏ: ô vuông bo xanh thương hiệu + chữ trắng (màu cố định, dùng inline trong nút)
export const Zalo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="1" y="1" width="22" height="22" rx="6" fill="#0068FF" />
    <text x="12" y="15.6" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="-0.3" fill="#fff">
      Zalo
    </text>
  </svg>
);

// Chữ "Zalo" trơn theo currentColor — dùng cho widget tròn nền xanh
export const ZaloWord = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <text x="12" y="16.2" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="11.5" letterSpacing="-0.4">
      Zalo
    </text>
  </svg>
);

export const iconMap = { dress: Dress, brush: Brush, camera: Camera, album: Album };
