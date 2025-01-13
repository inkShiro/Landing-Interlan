import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '3xl': '1920px', // Nuevo punto de quiebre para pantallas de 1920px
      },
      fontFamily: {
        ginger: ["'F37 Ginger Pro'", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
