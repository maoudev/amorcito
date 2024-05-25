/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        slideInLeft: "slideInLeft 0.9s ease-out",
        slideInRight: "slideInRight 0.9s ease-out",
      },
    },
  },
  plugins: [],
};
