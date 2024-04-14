/* eslint-disable global-require */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "700px" }, sm: { max: "550px" } }, // max: 1050px
    extend: {
      colors: {
        teal: { A700: "#00afa0", A700_01: "#00cda5", A700_33: "#00afa033", disable: "#00d7c8" },
        gray: {
          300: "#dcdcdc",
          400: "#c8c8c8",
          500: "#969696",
          700: "#646464",
          800: "#4d4d4d",
          "900_cc": "#1e1e1ecc",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_19": "#00000019",
          "900_26": "#00000026",
        },
        orange: { 400: "#ff9b1e", 500: "#ffc986" },
        white: { A700: "#ffffff" },
        cyan: { 500: "#00d7c8" },
      },
      boxShadow: {
        bs3: "0px 2px  4px 0px #0000003f",
        bs1: "0px 4px  4px 0px #0000003f",
        bs4: "inset 0px 4px  4px 0px #0000003f",
        bs2: "0px 4px  4px 3px #0000003f",
        bs: "0px 4px  4px 0px #00000026",
        bs5: "2px 2px  4px 4px #00000019",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
