/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "old-rose": {
          50: "#faf6f6",
          100: "#f6eeed",
          200: "#eeddde",
          300: "#e0c1c3",
          400: "#ce9ea1",
          500: "#b8777d",
          600: "#a25c66",
          700: "#864a54",
          800: "#714049",
          900: "#623943",
          950: "#351c21",
        },
      },
      backgroundImage: {
        "bg-antique": "url(/bg-antique.webp)",
        "bg-antique-2": "url(/bg-antique2.webp)",
        "bg-bento1": "url(/bento/art.webp)",
        "bg-bento2": "url(/bento/restaurant.webp)",
        "bg-bento3": "url(/bento/antiquies.webp)",
        "bg-bento4": "url(/bento/services.webp)",
      },
    },
  },
  plugins: [],
};
