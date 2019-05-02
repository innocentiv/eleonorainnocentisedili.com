import { css } from "styled-components"

export const sizes = {
  desktop: 992,
  tablet: 768,
  phablet: 576,
}

export const media = {
  ...Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `

    return acc
  }, {}),
  hover: type => (...args) => css`
    @media (hover: ${type}) {
      ${css(...args)}
    }
  `,
}

export const mixin = {
  boxShadow: () =>
    `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`,
  boxShadowHover: () =>
    `box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
}

const theme = {
  header: {
    background: "#272526",
  },
  content: {
    background: "#e3e3e3",
    maxWidth: "1200px",
  },
  colors: {
    darkgray: "#272526",
    gray: "#7b7b7b",
    lightgray: "#b2b2b2",
    white: "#f5f5f5",
  },
}

export default theme
