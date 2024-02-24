const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#20B757",
        secondary1: "#4371E9",
        secondary2: "#FF6161",
        secondary3: "#BD7B00",
        n0: "#FFFFFF",
        n10: "#FAFAFB",
        n20: "#F5F6F7",
        n30: "#EBECEF",
        n40: "#DFE0E4",
        n50: "#C1C4CC",
        n60: "#B2B6BF",
        n70: "#A6AAB5",
        n80: "#979CA8",
        n90: "#888E9C",
        n100: "#798090",
        n200: "#6A7283",
        n300: "#5B6477",
        n400: "#4F586D",
        n500: "#404A60",
        n600: "#343E56",
        n700: "#222E48",
        n800: "#13203B",
        n900: "#0B1323",
        bg3: "#23262B",
        bg4: "#1D1E24",
        lightbg1: "#F4FBF7",
        lightbg2: "#F6F8FE",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  // plugins: plugins,
};
