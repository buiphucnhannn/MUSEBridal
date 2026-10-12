# MUSE Bridal — Landing Page (Next.js 14 + Tailwind + JS thuần)

Website giới thiệu studio ảnh cưới Muse Bridal (TP.HCM) theo brief trong `docs/demo.docx`:
portfolio theo concept, hai gói chụp Muse Basic / Sài Gòn Basic, bảng giá & ưu đãi mùa cưới,
form đăng ký tư vấn, nút liên hệ nhanh (Zalo / Messenger / Gọi) và Google Maps.

## 1. Chạy project
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## 2. Cấu trúc
```
MUSEBridal/
├── public/favicon.ico        # icon trang web do khách cung cấp (logo Muse, 16→256px)
├── public/apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest  # sinh từ favicon.ico
├── public/images/            # kho ảnh gốc (giữ nguyên tên file) + logo.png (tách nền từ logo.jpg)
├── docs/demo.docx            # brief của khách
└── src/
    ├── app/
    │   ├── layout.js         # font (Playfair Display, Be Vietnam Pro, Great Vibes), Navbar/Footer, nút liên hệ nhanh
    │   ├── page.js           # trang chủ: Hero → About → Collections → Packages → Experience → Pricing → Offers → Moments → Contact
    │   ├── bo-suu-tap/       # /bo-suu-tap (danh sách album) và /bo-suu-tap/[slug] (chi tiết từng bộ ảnh + lightbox)
    │   ├── dich-vu/          # /dich-vu: trang Dịch vụ riêng (hero 3 ảnh so le → hành trình 4 bước → 5 dịch vụ zig-zag → bảng giá → FAQ → CTA)
    │   ├── not-found.js
    │   └── globals.css
    ├── components/
    │   ├── fx/               # SmoothScroll (Lenis), Parallax, SplitText (chữ blur-in), ScrollTop, Preloader,
    │   │                     # ExtensionErrorGuard (script inline trong <head>: chặn lỗi từ tiện ích trình duyệt khỏi overlay dev)
    │   ├── layout/           # Navbar (pill kính mờ nổi), Footer, Logo, FloatingContact
    │   ├── sections/         # các khối của trang chủ
    │   ├── services/         # các khối riêng của trang Dịch vụ (ServicesHero, Journey, ServiceList, Faq, ServicesCta); nội dung ở servicesPage trong site.js
    │   ├── gallery/          # AlbumGallery (masonry + lightbox)
    │   └── ui/               # Button, Container, SectionHeading, Lightbox, Icons, Reveal
    ├── data/site.js          # TOÀN BỘ nội dung: text, giá, gói, bộ sưu tập, mapping ảnh
    ├── hooks/useReveal.js    # hiệu ứng hiện khi cuộn (.reveal, .split)
    ├── hooks/useScrollProgress.js  # tiến độ cuộn cho section ghim (Packages, Moments)
    └── lib/utils.js
```

## 3. Sửa nội dung
Mọi chữ, giá, quyền lợi, link Zalo/Messenger/Facebook/Maps và việc ảnh nào thuộc bộ sưu tập nào
đều nằm trong `src/data/site.js`. Không cần đụng vào component.

- `photos`: đặt tên ngắn cho từng file ảnh trong `public/images`.
- `collections`: 4 bộ sưu tập (Muse Studio, Saigon Street, Secret Garden, Giai Duyên) — sửa `images` để đổi ảnh.
- `pricing.plans`: giá, giá gốc, quyền lợi từng gói.
- `offers.posters`: poster ưu đãi chạy marquee.
- `siteConfig`: hotline, Zalo, Messenger, Facebook, link Google Maps; `mapsEmbed` nhúng theo CID địa điểm (iframe Google Maps thật, không cần API key).

## 4. Form đăng ký (popup)
Form đặt lịch là popup dùng chung toàn site: `src/components/booking/BookingModal.js` (gắn trong layout).
Bất kỳ nút/link nào có thuộc tính `data-booking` sẽ mở popup; `data-booking="muse-basic"` hoặc
`"saigon-basic"` chọn sẵn gói. Section cuối trang (#contact) là khối mời gọi, không chứa form.
`ContactForm.js` hiện mở Zalo kèm nội dung đã soạn (demo); khi có backend thay `handleSubmit` bằng gọi API / Google Sheets.

## 5. Hiệu ứng & bố cục (bản redesign)
Mỗi section cao ~1 màn hình: `.screen` = min-height `var(--screen)` = min(100svh, 1080px) — các khung ảnh lớn cũng tính theo
`--screen`, kể cả đệm dưới của khối chữ hero — nên khi zoom trình duyệt nhỏ lại bố cục vẫn y như ở 100% (không phình theo viewport). Tham khảo header & cảm giác cuộn từ bellairetravels.com.
- **Header**: viên thuốc kính mờ nổi cách mép, menu giữa có ô active, CTA kèm vòng tròn mũi tên; kính tối trên hero, kính kem khi cuộn.
- **Cuộn mượt**: Lenis (`fx/SmoothScroll.js`, lerp 0.06, wheelMultiplier 0.78, `respectReducedMotion: false`),
  anchor `/#id` cuộn êm, nút lên đầu trang. Vị trí đích (hàm `scrollToTarget`): section 1 màn (.screen) đưa mép trên về 0,
  nhưng luôn giữ nội dung đầu tiên cách mép trên ≥ 140px (dưới header); khối khác (vd. #goi-chup ở trang Dịch vụ) đặt nội dung đúng 140px.
  Toạ độ tính bằng offsetTop (bỏ qua transform của hiệu ứng) nên không lệch.
  Link tới chính trang đang xem không có # (logo, mục menu hiện tại) → cuộn êm lên đầu.
  **Gotcha:** handler click của SmoothScroll/PageTransition phải đăng ký ở pha capture (`addEventListener(..., true)`):
  `<Link>` của Next bắt click ở document trước và tự điều hướng + nhảy trang nếu chưa preventDefault. Hero có parallax: ảnh trôi chậm hơn trang, chữ mờ dần.
  Lưu ý: nếu Windows tắt "Hiệu ứng hoạt ảnh" (prefers-reduced-motion) Lenis mặc định sẽ tắt smooth — đã chủ động bỏ qua.
- **Màn chào**: `fx/Preloader.js` hiện logo + vạch nạp ~1,4s rồi kéo màn lên (mỗi lần tải trang); khi màn kéo lên phát sự kiện
  `muse:ready` + class `is-ready` trên <html>, hero chỉ bắt đầu hiệu ứng từ lúc đó.
- **Hero**: 3 cột ảnh dọc (triptych) xoay vòng 9 ảnh, hiện dần từ mờ + thu nhẹ về 100%, chữ hiện từng ký tự blur-in.
- **Về Muse**: câu tuyên ngôn có ảnh chèn giữa chữ, ảnh lớn parallax.
- **Bộ sưu tập**: accordion ngang (rê chuột nở cột); mobile cuộn ngang snap.
- **Gói chụp**: section ghim, cuộn đổi từ gói 01 sang 02 (`useScrollProgress`).
- **Dịch vụ**: "xấp ảnh" 4 tấm lệch góc, mục đang chọn trượt lên trên cùng; dấu & trong tiêu đề serif dùng component `Amp` (sans mảnh, màu mocha).
- **Bảng giá**: 2 thẻ trắng mờ trên nền kem, quyền lợi theo nhóm (`pricingRows` trong site.js) xếp lưới 2x2 để vừa một màn hình.
- **Ưu đãi**: 2 dải poster chạy ngược chiều, bấm phóng to.
- **Khoảnh khắc**: dải ảnh cuộn ngang theo chiều cuộn dọc (ghim).
- Ảnh dùng `ui/Pic.js` (quality 90) + `sizes` sát kích thước hiển thị để nét.
- Lưu ý: dùng `overflow-x: clip` (không phải hidden) trên html/body để `position: sticky` hoạt động.
- **Section ghim chỉ ghim khi viewport ≤ 1080px cao** (lớp `.pin-only` / `.stack-only` trong globals.css). Viewport cao hơn
  (zoom nhỏ, màn 1440p+) panel ghim 1080px không lấp kín màn → lộ nền trống, nên tự chuyển sang bố cục xếp chồng:
  Gói chụp = 2 panel 1080px (dùng chung với mobile); Khoảnh khắc = bản desktop không ghim cùng bố cục panel ghim
  (section 1080px, thẻ giới thiệu + dải ảnh cùng kích thước, kéo chuột để lướt, tự căn giữa nếu vừa màn); mobile có bản riêng.

## 6. Mobile / tablet
- Mobile (<1024px) dùng bố cục riêng: hero 1 cột ảnh, Bộ sưu tập / Ưu đãi / Khoảnh khắc là dải vuốt ngang (snap) kèm gợi ý
  "Vuốt ngang để xem thêm", Gói chụp 2 thẻ xếp dọc, Dịch vụ xấp ảnh với độ lệch nhân hệ số `--deck-k` (0.45 mobile,
  0.4 ở lg, 0.75 ở xl, 1 từ 2xl), bảng giá xếp dọc, popup đặt lịch 1 cột, nút nổi nhỏ hơn.
- `.screen` (cao đúng 1 màn hình) chỉ áp dụng từ lg (≥1024px); dưới đó section co theo nội dung với đệm đều 64px (`py-16`).
  Mobile: xấp ảnh Dịch vụ nằm dưới danh sách, 3 polaroid Liên hệ nằm dưới tiêu đề, chữ ký mờ thu nhỏ, tiêu đề Về Muse
  giữ cụm "câu chuyện riêng." không tách dòng.
- Kiểm tra: scratchpad `shot/mobile.js <w> <h> <prefix>` chụp từng màn + đo tràn ngang + liệt kê tap target < 36px.
  Đã kiểm ở 360, 390, 768, 1024: không tràn ngang.

## 7. Quy ước giao diện
- Hero cao đúng 1 màn hình (`h-[100svh]`), ảnh dùng `object-cover` trong khung có chiều cao cố định
  → không có khối ảnh nào tự phình to theo kích thước ảnh gốc.
- `html, body { overflow-x: hidden }` + mọi khối full-width dùng `w-full` (không dùng `100vw`) → không tràn ngang.
- Màu brand trong `tailwind.config.js`: `cream, sand, blush, mocha, ink, gold`.

## 8. SEO / chia sẻ mạng xã hội
- Open Graph image + JSON-LD LocalBusiness (toạ độ, hotline, giờ mở cửa) trong `src/app/layout.js`.
- Đặt domain thật qua biến môi trường `NEXT_PUBLIC_SITE_URL` (mặc định https://musebridal.vn).

## 9. Cần khách xác nhận
- Địa chỉ cụ thể của studio (hiện chỉ có link & toạ độ Google Maps).
- Giờ mở cửa, link Instagram / TikTok / YouTube chính thức.
- Bảng giá, điều kiện áp dụng ưu đãi mùa cưới (site không nhắc "30 slot" theo yêu cầu; poster Facebook của khách vẫn in con số này).
- Email liên hệ (brief nói có nhưng chưa cung cấp) và domain website.
