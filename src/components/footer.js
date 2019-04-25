import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.lightgray};
  padding: 0.5em 1em;
  text-align: center;
  font-size: 0.8rem;
`

const Footer = () => (
  <FooterWrapper>
    Work in progress - Eleonora Innocenti Sedili - 2019 -{" "}
    <Link to={"/contacts"}>Contatti</Link>
  </FooterWrapper>
)

export default Footer
