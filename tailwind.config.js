const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["HindSiliguri", ...defaultTheme.fontFamily.sans],
    },
    height: {
      20: "5rem",
      44: "11rem",
      48: "12rem",
      60: "15rem",
      72: "18rem",
      96: "24rem",
      108: "32rem",
      full: "100%",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
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
