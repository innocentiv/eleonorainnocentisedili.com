import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectGrid from "../../components/projectGrid"

const TextsPage = ({ data, ...pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout pageContext={pageContext}>
      <SEO title={siteTitle} keywords={[`gatsby`, `application`, `react`]} />
      <ProjectGrid projects={posts} />
    </Layout>
  )
}

export default TextsPage

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
