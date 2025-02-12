/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "components/**/*.{ts,tsx}"],
  darkMode: ["class"],
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
    extend: {
      colors: {
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
        gray: {
          200: "hsl(var(--gray_200))",
          400: "hsl(var(--gray_400))",
          600: "hsl(var(--gray_600))",
        },
        pink: {
          600: "hsl(var(--pink_600))",
          900: "hsl(var(--pink_900))",
        },
        purple: {
          700: "hsl(var(--purple_700))",
          900: "hsl(var(--purple_900))",
        },
        blue: {
          100: "hsl(var(--blue_100))",
          200: "hsl(var(--blue_200))",
        },
        beige: "hsl(var(--beige))",
        salmon: "hsl(var(--salmon))",
        green: {
          800: "hsl(var(--green))",
        },
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
      },
    },
    // borderRadius: {
    //   lg: `var(--radius)`,
    //   md: `calc(var(--radius) - 2px)`,
    //   sm: "calc(var(--radius) - 4px)",
    // },
  },
  plugins: [require("tailwindcss-animate"), plugin],
};
