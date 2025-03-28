import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        'custom-darkred': '#D90429', // custom color Dark red
        'custom-red': '#EF233C', // custom color red
        'custom-lightgrey': '#EDF2F4', // custom color light grey
        'custom-mediumgrey': '#8D99AE', // custom color medium grey
        'custom-darykgrey': '#2B2D42', // custom color dark grey

        'custom-darkblue': '#304269', // custom color Dark blue
        'custom-lightblue': '#91BED4', // custom color light blue
        'custom-blue': '#D9E8F5', // custom color blue
        'custom-orange': '#F26101', // custom color orange
      },
    },
  },
  plugins: [],
} satisfies Config;
