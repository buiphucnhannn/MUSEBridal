# MUSE Bridal — Landing Page (Next.js + Tailwind + JS thuần)

## 1. Chạy project
```bash
npm install
npm run dev
# mở http://localhost:3000
```

## 2. Cấu trúc thư mục
```
MUSEBridal/
├── public/
│   ├── images/        # ảnh hero, gallery: hero.jpg, dress-1.jpg...
│   ├── icons/         # svg icon riêng
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.js      # Navbar + Footer chung
│   │   ├── page.js        # ghép các section
│   │   └── globals.css    # tailwind + custom css
│   ├── components/
│   │   ├── layout/        # Navbar.js, Footer.js
│   │   ├── sections/      # Hero, Features, Gallery, Pricing, Testimonials, CTA, Contact
│   │   └── ui/            # Button, Container, SectionHeading (tái dùng)
│   ├── data/
│   │   └── site.js        # chữ, giá, nav — sửa nội dung ở đây, khỏi đụng code
│   ├── lib/
│   │   └── utils.js       # hàm cn() nối class
│   └── hooks/
│       └── useReveal.js   # hiệu ứng hiện khi scroll
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json      # alias @/* -> ./src/*
```

## 3. Quy ước chuyên nghiệp
- `ui/` chứa component ngu (dumb), không gọi data trực tiếp, nhận props.
- `sections/` chứa khối landing, lấy text từ `data/site.js`.
- `layout/` chỉ Navbar/Footer, dùng trong `app/layout.js`.
- JS thuần 100%, không TypeScript. Dùng alias `@/` để import sạch.
- Màu brand trong `tailwind.config.js`: `cream, blush, charcoal, gold`.

## 4. Thêm ảnh
Bỏ file vào `public/images/`, gọi `/images/ten-file.jpg`. Đã chừa sẵn hero + 3 ảnh gallery.

## 5. Build
```bash
npm run build
npm start
```
