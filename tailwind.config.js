/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#FEF5ED",
        brassScorpion: "#753D2C",
        pantone: "#FF8200",
      },
    },
  },
  plugins: [],
};
