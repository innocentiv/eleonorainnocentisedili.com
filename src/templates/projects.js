import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RemarkArticle from "../components/remarkArticle"

const ProjectTemplate = ({data, ...pageContext}) => {
  const post = data.markdownRemark
  const { frontmatter, excerpt, html } = post

  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <RemarkArticle dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
