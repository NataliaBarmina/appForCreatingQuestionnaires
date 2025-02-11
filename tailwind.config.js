/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "components/**/*.{ts,tsx}"],
  darkMode: ["class"],
  // content: ["app/**/*.{ts,tsx}"],
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
    // extend: {
    // colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))",
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    // },
    // },
    // borderRadius: {
    //   lg: `var(--radius)`,
    //   md: `calc(var(--radius) - 2px)`,
    //   sm: "calc(var(--radius) - 4px)",
    // },
    // extend: {},
    // },
  },
  plugins: [require("tailwindcss-animate")],
};
