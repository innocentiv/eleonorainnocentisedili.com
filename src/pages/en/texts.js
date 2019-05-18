import React from "react"
import TextsPage from "../texts"

const TextsPageEn = props => <TextsPage {...props} />

export default TextsPageEn

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "texts" }, lang: { eq: "en" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
