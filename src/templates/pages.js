import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RemarkArticle from "../components/remarkArticle"

const PageTemplate = ({data, ...pageContext}) => {
  const post = data.markdownRemark
  const { frontmatter, excerpt, html } = post

  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p>{frontmatter.date}</p>}
      <RemarkArticle dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
        description
      }
    }
  }
`
