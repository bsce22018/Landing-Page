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
      maxWidth: {
        'screen-2xl': '1600px', 
        'screen-3xl': '1920px',
        'screen-4xl': '2560px', 
      },
      spacing: {
        '128': '32rem', 
        '144': '36rem', 
      },
      padding: {
        '18': '4.5rem', 
      },
    },
  },
  plugins: [],
} satisfies Config;
