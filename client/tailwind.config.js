/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-motion"), 
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        descoteaux: {
          "primary": "#018c0f",
          "primary-content": "#ffffff",
          "secondary": "#d7ffe0",
          "secondary-content": "#018c0f",
          "neutral": "#666666",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-content": "#1f2428",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};