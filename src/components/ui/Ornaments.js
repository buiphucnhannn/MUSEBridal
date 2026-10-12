import { cn } from "@/lib/utils";

/**
 * Họa tiết trang trí đơn giản, hợp chủ đề cưới — dùng để lấp khoảng trống cho cân đối.
 * Tất cả đều pointer-events-none, màu theo currentColor (đặt text-mocha/xx để chỉnh độ mờ).
 */

// Hoa calla lily nét mảnh — loài hoa cô dâu cầm trong bộ ảnh studio của Muse
export const Calla = ({ className = "" }) => (
  <svg viewBox="0 0 120 180" className={cn("pointer-events-none", className)} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {/* cuống */}
    <path d="M58 178c2-40 4-72 10-98" />
    <path d="M78 178c-2-36-6-66-16-92" opacity=".7" />
    {/* bông 1 */}
    <path d="M68 80C50 68 44 44 56 26c8-12 22-14 30-4-14 2-24 14-26 30 8-6 20-6 28 2-12 6-20 14-20 26z" />
    <path d="M70 46c4-6 9-9 14-10" opacity=".6" />
    {/* bông 2 nhỏ, lệch */}
    <path d="M62 86c-14-6-22-22-16-36 4-8 14-10 20-4-10 2-16 10-16 20 6-4 14-3 18 3-8 4-10 10-6 17z" opacity=".75" />
    {/* lá mảnh */}
    <path d="M58 178c-18-14-28-34-24-56 16 10 24 32 24 56z" opacity=".6" />
  </svg>
);

// Bông hoa line-art 5 cánh với nhụy nhỏ
export const Bloom = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={cn("pointer-events-none", className)} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden>
    {[0, 72, 144, 216, 288].map((a) => (
      <path key={a} transform={`rotate(${a} 60 60)`} d="M60 60c-16-12-18-32-4-40 10-6 22 2 24 14 2 12-8 22-20 26z" />
    ))}
    <circle cx="60" cy="60" r="6" />
    <circle cx="60" cy="60" r="2" fill="currentColor" stroke="none" />
    <path d="M60 66c2 18 0 34-10 48M60 66c-2 18 0 34 10 48" opacity=".6" />
  </svg>
);

// Chữ ký mờ cỡ lớn (font script) làm watermark
export const Watermark = ({ text = "Muse", className = "" }) => (
  <span
    aria-hidden
    className={cn("pointer-events-none select-none whitespace-nowrap font-script leading-none", className)}
  >
    {text}
  </span>
);

// Đường kẻ mảnh 1px có viên kim cương nhỏ ở giữa (divider) — dựng bằng HTML để không bị co giãn
export const DiamondLine = ({ className = "" }) => (
  <div className={cn("pointer-events-none flex items-center gap-4", className)} aria-hidden>
    <span className="h-px flex-1 bg-current opacity-40" />
    <span className="h-2 w-2 rotate-45 bg-current" />
    <span className="h-px flex-1 bg-current opacity-40" />
  </div>
);
