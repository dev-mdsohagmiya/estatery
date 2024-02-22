import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      colors: {
        graylight: "#8B8C93",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#F8F8F8",
        "gray-light": "#d3dce6",
        white: "#ffffff",
        primary: "#000929",
        grayline: "#DADAE3",
        dark: "#4d5369",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: "#000929",
            secondary: "#B8BBC0",
            dark: "#141E2E",
            red: "#E50045",
            green: "#70A75C;",
            blue: "#1171FF",
            gray: "#F8F8F8",
            graylight: "#8B8C93",
            grayline: "#DADAE3",
            dark: "#4d5369",
          },
          backgroundColor: {
            primary: "#000929",
            white: "#ffffff",
            dark: "#4d5369",
            secondary: "#37404D",
            red: "#E50045",
            darkLight: "#1B273A",
            darkLighter: "#243042",
            green: "#70A75C;",
            blue: "#1171FF",
            gray: "#ececeb",
            graylight: "#8B8C93",
            grayline: "#DADAE3",
          },
        },
        // dark: {
        //   layout: {},
        //   colors: {
        //     primary: "#ff4500",
        //     secondary: "#B8BBC0",
        //     dark: "#141E2E",
        //     red: "#E50045",
        //     green: "#70A75C;",
        //     blue: "#1171FF",
        //   },
        //   backgroundColor: {
        //     white: "#ffffff",
        //     dark: "#141E2E",
        //     secondary: "#37404D",
        //     red: "#E50045",
        //     darkLight: "#1B273A",
        //     darkLighter: "#243042",
        //     green: "#70A75C;",
        //     blue: "#1171FF",
        //   },
        // },
      },
    }),
  ],
  darkMode: "class",
};
