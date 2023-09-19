/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: { min: "320px" },
      tablet: { min: "768px" },
      desktop: { min: "1280px" },
    },
  },
  plugins: [],
};
