const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${node.fields.type}.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const regex = /\/content\/([a-zA-Z-]*?)\/([a-zA-Z-]*?)\/index(?:\.([a-zA-Z]{2}))?\.md$/
    const [match, type, name, lang] = node.fileAbsolutePath.match(regex)

    if (match) {
      const slug = lang ? `/${lang}/${name}` : `/${name}`

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `type`,
        value: type,
      })
      createNodeField({
        node,
        name: `lang`,
        value: lang || `it`,
      })
    }
  }
}
