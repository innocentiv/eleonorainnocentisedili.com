import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ["Questrial", "sans-serif"],
  bodyFontFamily: ["Questrial", "sans-serif"],
  includeNormalize: true,
  googleFonts: [
    {
      name: "Questrial",
      styles: ["400"],
    },
  ],
})

export default typography
