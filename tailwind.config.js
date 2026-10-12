/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/data/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Palette theo brief: trắng kem, be, hồng phấn + nâu trầm
        cream: {
          DEFAULT: "#F8F4EE",
          50: "#FCFAF7",
          100: "#F5EFE7",
          200: "#EFE6DB",
        },
        sand: "#E6D9CB",
        blush: {
          DEFAULT: "#F1E1DA",
          100: "#F7ECE7",
          200: "#E9CFC5",
        },
        mocha: {
          DEFAULT: "#7A5240",
          light: "#9C7560",
          dark: "#5A3A2B",
        },
        ink: {
          DEFAULT: "#2B2420",
          soft: "#6B5F58",
          muted: "#9A8F88",
        },
        gold: {
          DEFAULT: "#B99669",
          light: "#E3D3BA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(43, 36, 32, 0.25)",
        card: "0 10px 30px -12px rgba(43, 36, 32, 0.18)",
        polaroid: "0 18px 40px -18px rgba(43, 36, 32, 0.35)",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        float: "float 4s ease-in-out infinite",
        kenburns: "kenburns 9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
