import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { media } from "./theme"

export const MenubarWrapper = styled.nav`
  display: none;

  ${media.phablet`
    display: block;
  `};

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }

  a + a {
    margin-left: 1em;
  }
`

const Menubar = () => (
  <MenubarWrapper>
    <Link to="/bio">Bio</Link>
    <Link to="/contacts">Contatti</Link>
    <Link to="/">Opere</Link>
    <Link to="/texts">Testi</Link>
  </MenubarWrapper>
)

export default Menubar
