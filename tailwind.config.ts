import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainCol:'#8338EC',
        greyish:'#9BA3B8',
        alabester:'#fef9f3',
        dashboard:'#F1F5F9',
      },
    },
  },
  plugins: [],
};
export default config;
