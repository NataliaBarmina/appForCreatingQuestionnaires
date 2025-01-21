/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      s: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: {
        200: "rgb(128, 128, 128)",
        400: "rgb(115, 123, 123)",
        600: "#343434",
      },
      green: {
        800: "rgb(47,79,79)",
      },
      pink: {
        600: "rgb(216,112,147)",
        900: "rgb(220,20,60)",
      },
      purple: {
        700: "rgb(247, 111, 222)",
        900: "rgb(131, 47, 209)",
      },
      blue: {
        100: "rgb(240,248,255)",
        200: "rgb(180, 209, 210)",
      },
      beige: "rgb(245,222,179)",
      salmon: "rgb(233,150,122)",
    },
    extend: {},
  },
  plugins: [],
};
