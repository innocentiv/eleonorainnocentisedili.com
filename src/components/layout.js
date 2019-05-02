/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./theme"

import Header from "./header"
import Content from "./content"
import Section from "./section"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #___gatsby > div {
    height: 100%;
  }

  a {
    color: inherit;
  }
`

const SiteWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <SiteWrapper>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            <Section>{children}</Section>
          </Content>
          <Footer />
        </SiteWrapper>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
