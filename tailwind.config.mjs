/** @type {import('tailwindcss').Config} */
import tailwindPluginTypography from "@tailwindcss/typography";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brawn: {
          white: "#FEFFFF",
          gray: "#20303F",
          yellow: "#B8FD6E",
          black: "#142127",
          red: "#BD2E40",
        },
      },
    },
  },
  plugins: [tailwindPluginTypography],
};
