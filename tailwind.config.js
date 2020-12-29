const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // sans: ["NunitoSans", ...defaultTheme.fontFamily.sans],
      sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      listStyleType: {
        circle: "circle",
      },
      fontFamily: {
        sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
        // sans: ["NunitoSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
