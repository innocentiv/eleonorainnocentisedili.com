import { css } from "styled-components"

export const sizes = {
  desktop: 992,
  tablet: 768,
  phablet: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const theme = {
  header: {
    background: "#2b2b2b",
  },
  content: {
    background: "#e3e3e3",
    maxWidth: "960px",
  },
  colors: {
    gray: "#7b7b7b",
    lightgray: "#b2b2b2",
    white: "#e3e3e3",
  },
}

export default theme
