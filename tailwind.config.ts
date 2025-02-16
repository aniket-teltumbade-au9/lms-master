import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        cta: "#E5E7EB", // CTA buttons
        subtitle: "#000000", // Section & Card subtitles
        header: "#F59E0B", // Section & Card headers
        body: "#1E3A8A", // Cards & Body background
      },
      // fontFamily: {
      //   sans: ["Lufga", "sans-serif"], // Custom global font
      // },
    },
  },
  plugins: [],
} satisfies Config;
