/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },

      colors: {
        gray: {
          100: "#29292E",
          200: "#E1E1E6",
          500: "#202024",
          900: "#121214",
        },
      },
      placeholderColor: {
        primary: "#87868B",
      },
    },
  },
  plugins: [],
};
