/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f7941d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
