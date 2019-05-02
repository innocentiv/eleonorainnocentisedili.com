import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 1.5,
  headerWeight: "normal",
  headerFontFamily: ["Questrial", "sans-serif"],
  bodyFontFamily: ["Raleway", "sans-serif"],
  includeNormalize: true,
  googleFonts: [
    {
      name: "Questrial",
      styles: ["400"],
    },
    {
      name: "Raleway",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
