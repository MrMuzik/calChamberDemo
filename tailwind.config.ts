import { type Config } from "tailwindcss";

export default {
  content: [
    "./routes/**/*.{ts,tsx,js,jsx}",
    "./islands/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "calchamber-blue": "#002F5D",
        "calchamber-blue-light": "#009CD7",
        "calchamber-blue-medium": "#155B7D",
        "calchamber-blue-dark": "#012F60",
        "calchamber-orange": "#FEB566",
        "link-blue": "#1177CC",
        "link-blue-light": "#B1DDDE",
        "calchamber-gray": "#F6F6F6",
        "calchamber-gray-light": "#F1F1F1",
        "calchamber-green-light": "#D1E6DD",
        "calchamber-green-dark": "#093621",
        "calchamber-red": "#FF000C",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
