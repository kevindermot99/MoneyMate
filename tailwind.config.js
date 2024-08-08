/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        "main-color": "#fe5707",
        "main-color-light":"#FBAC1D",
        "light-body": "#fcfcfc",
        "dark-body-color":"#090a0a",
        "dark-inactive-container":"#0F1010",
        "dark-active-container":"#191919",
        "light-text-color":"#3d3529",
        "dark-text-color":"#f5f5f5",
      },
    },
  },
  plugins: [],
};
