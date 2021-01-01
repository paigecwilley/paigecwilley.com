const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      listStyleType: {
        circle: "circle",
      },
      fontFamily: {
        sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(10deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out 250ms 3",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
      outline: ["focus", "hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
