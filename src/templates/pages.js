import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { frontmatter, excerpt, html } = post
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || excerpt}
        />
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <p>{frontmatter.date}</p>}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
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
