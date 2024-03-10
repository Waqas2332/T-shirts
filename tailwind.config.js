/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heading: ["Encode Sans", "sans-serif"],
      },
      colors: {
        textPrimary: "#545454",
        buttonBg: "#121212",
      },
    },
  },
  plugins: [],
};
