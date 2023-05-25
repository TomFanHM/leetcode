/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(336deg)" },
        },
        skeleton_loading: {
          "0%": {
            backgroundColor: "hsl(200, 20%, 80%)",
          },
          "100%": {
            backgroundColor: "hsl(200, 20%, 95%)",
          },
        },
      },
      animation: {
        "loading-skeleton": "skeleton_loading 1s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
};
