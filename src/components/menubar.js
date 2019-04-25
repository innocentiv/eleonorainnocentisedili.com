import React from "react"
import styled from "styled-components"
import { media } from "./theme"
import MenuItem from "./menuitem"

export const MenubarWrapper = styled.nav`
  display: none;

  ${media.phablet`
    display: block;
  `};

  ${MenuItem} + ${MenuItem} {
    margin-left: 1em;
  }
`

const Menubar = () => (
  <MenubarWrapper>
    <MenuItem to="/bio">Bio</MenuItem>
    <MenuItem to="/contacts">Contatti</MenuItem>
    <MenuItem to="/">Opere</MenuItem>
    <MenuItem to="/texts">Testi</MenuItem>
  </MenubarWrapper>
)

export default Menubar
