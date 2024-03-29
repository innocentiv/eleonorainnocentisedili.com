import styled from "styled-components"
import { mixin } from "../components/theme"

const RemarkArticle = styled.article`
  .gatsby-resp-iframe-wrapper,
  .gatsby-resp-image-wrapper {
    ${mixin.boxShadow}
  }

  .gatsby-resp-image-wrapper {
    width: 100%;
  }

  .gatsby-resp-image-grid .gatsby-resp-image-wrapper {
    max-width: 720px !important;
  }

  blockquote {
    padding-left: 0.8em;
    border-left: 2px solid currentColor;
    font-style: italic;
  }
`

export default RemarkArticle
