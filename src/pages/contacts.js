import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ContactFrom from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"

const UnstyledContactsPage = ({ className, ...pageContext }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout className={className} pageContext={pageContext}>
      <SEO title={site.siteMetadata.title} />
      <ContactFrom />
    </Layout>
  )
}

const ContactsPage = styled(UnstyledContactsPage)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default ContactsPage
