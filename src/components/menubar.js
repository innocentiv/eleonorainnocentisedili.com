import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const MenubarWrapper = styled.nav`
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
