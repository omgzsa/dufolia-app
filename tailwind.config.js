/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    fontFamily: {
      body: ["Lato", "sans"],
      display: ["Josefin Sans", "sans"],
    },
    extend: {
      colors: {
        primary: {
          100: "#00807c",
          200: "#69aaa8",
        },
        accent: "#ed801c",
      },
    },
  },
  plugins: [],
};
