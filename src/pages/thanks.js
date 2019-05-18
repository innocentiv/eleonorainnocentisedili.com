import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UnstyledThanksPage = ({ className, ...pageContext}) => {
  return (
    <Layout className={className} pageContext={pageContext}>
      <SEO title="Grazie" />
      <h1>Grazie per avermi contattato</h1>
      <p>Ti risponderò il prima possibile</p>
      <Link to="/">Vai all'homepage</Link>
    </Layout>
  )
}

const ThanksPage = styled(UnstyledThanksPage)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default ThanksPage
