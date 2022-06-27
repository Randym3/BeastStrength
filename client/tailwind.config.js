/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xlxl: { max: "1500px" },
      xl: { max: "1440px" },
      lglg: { max: "1330px" },
      mdlg: { max: "1190px" },
      smlg: { max: "1065px" },
      lg: { max: "976px" },
      md: { max: "768px" },
      sm: { max: "480px" }
    },
    extend: {
      fontFamily: {
        karla: ['"Karla"', "sans-serif"]
      },
      colors: {
        modal: "#00000081"
      }
    }
  },
  plugins: []
}
