/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette cưới: sang, nhẹ, warm
        cream: "#FAF7F2",
        blush: {
          50: "#FDF2F4",
          100: "#FBE7EB",
          200: "#F5CBD4",
          500: "#C98A94",
          600: "#B76E79",
        },
        charcoal: {
          DEFAULT: "#2B2B2E",
          soft: "#55555C",
        },
        gold: {
          DEFAULT: "#C9A96A",
          light: "#E8DCC3",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
        },
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(43, 43, 46, 0.15)",
      },
    },
  },
  plugins: [],
};
