import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectTemplate extends React.Component {
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
