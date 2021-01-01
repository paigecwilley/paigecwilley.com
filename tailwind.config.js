const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./pages/**/*.js", "./src/components/**/*.js"],
    options: {
      // safelist: ["w-1/3", "w-1/2"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
    },
    height: {
      48: "12rem",
      60: "15rem",
      96: "24rem",
      108: "32rem",
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
