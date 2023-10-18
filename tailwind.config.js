/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        dark: {
          "primary-100": "#47cbc0",
          "primary-200": "#51aba4",
          "primary-300": "#006963",
          "accent-100": "#73bdb1",
          "accent-200": "#006963",
          "text-100": "#FFFFFF",
          "text-200": "#e0e0e0",
          "100": "#333333",
          "200": "#434343",
          "300": "#5c5c5c",
        },
        light: {
          "primary-100": "#47cbc0",
          "primary-200": "#51aba4",
          "primary-300": "#006963",
          "accent-100": "#42847f",
          "accent-200": "#006963",
          "text-100": "#000000",
          "text-200": "#2c2c2c",
          "100": "#ffffff",
          "200": "#e2e2e2",
          "300": "#bababa",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
