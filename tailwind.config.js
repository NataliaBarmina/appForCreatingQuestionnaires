/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        s: "540px",
        "3xl": "1920px",
      },
      colors: {
        gray: {
          200: "hsl(var(--gray_200) / <alpha-value>)",
          600: "hsl(var(--gray_600) / <alpha-value>)",
          950: "hsl(var(--gray_950) / <alpha-value>)",
        },
        pink: {
          900: "hsl(var(--pink_900) / <alpha-value>)",
        },
        purple: {
          900: "hsl(var(--purple_900) / <alpha-value>)",
        },
        blue: {
          100: "hsl(var(--blue_100) / <alpha-value>)",
          200: "hsl(var(--blue_200) / <alpha-value>)",
        },
        beige: "hsl(var(--beige) / <alpha-value>)",
        green: {
          800: "hsl(var(--green) / <alpha-value>)",
        },
        // для библиотеки shadcn
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
