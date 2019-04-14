import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title={siteTitle} keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{ margin: "auto", maxWidth: `300px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <p style={{ textAlign: "center" }}>Work in progress</p>
      <p>
        E’ il 1991 e una giovane coppia bolognese sta tornando a casa la sera
        della vigilia della Befana. Fa molto freddo e forse è per il ghiaccio
        sull’asfalto o perché il conducente dell’altra auto ha lavorato anche di
        sabato dopo una settimana sfiancante, sta di fatto che non possono
        evitarlo. L’altra macchina gli viene addosso, catapultandoli fuori
        strada. Durante quell’incidente sono nata io. Era mio dovere fare della
        mia vita qualcosa fuori dall’ordinario. Volevo essere una scrittrice,
        un’attrice, una fotografa, una pittrice, una sociologa, una regista, una
        curatrice, una politologa, una stratega, una giornalista ma poi ho
        capito che essere un’artista oggi significava essere già un po’ tutto
        questo.
      </p>
      <hr />
      {posts.map(({ node }) => (
        <div key={node.fields.slug}>
          {node.frontmatter.image && <Img style={{width: 300}} fluid={node.frontmatter.image.childImageSharp.fluid} />}
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
