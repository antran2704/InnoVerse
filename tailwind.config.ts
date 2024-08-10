import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // NextUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "primary-50": "#E6EEFC",
        "primary-100": "#1A82E3",
        "primary-200": "#0459DD",

        // neutral
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#C5C5C5",

        // support color
        "support-gray-50": "rgba(179, 191, 209, 0.2)",
        "support-gray-100": "rgba(179, 191, 209, 0.3)",

        "support-success-50": "#BCE9CE",
        "support-success-100": "#79D39D",
        "support-success-200": "#57C885",

        "support-error-50": "#EDB29F",
        "support-error-100": "#DB653F",
        "support-error-200": "#D23F0F",

        "support-warn-100": "#FBAE05",
        "support-warn-200": "#FFAD0A",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
