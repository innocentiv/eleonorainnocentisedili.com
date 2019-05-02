import React from "react"
import styled from "styled-components"
import { media } from "./theme"
import MenuItem from "./menuitem"
import { FaInstagram } from "react-icons/fa"

export const MenubarWrapper = styled.nav`
  display: none;

  ${media.phablet`
    display: flex;
  `};

  ${MenuItem} + ${MenuItem} {
    margin-left: 1em;
  }
`

export const MenubarExternalLink = styled.a`
  color: ${props => props.theme.colors.lightgray};
  display: inline-block;
  margin-left: 1em;
  font-size: 125%;
  height: 1em;
`

const Menubar = () => (
  <MenubarWrapper>
    <MenuItem to="/bio">Bio</MenuItem>
    <MenuItem to="/contacts">Contatti</MenuItem>
    <MenuItem to="/">Opere</MenuItem>
    <MenuItem to="/texts">Testi</MenuItem>
    <MenubarExternalLink
      href="https://www.instagram.com/eleonorainnocentisedili/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram aria-label="Instagram" />
    </MenubarExternalLink>
  </MenubarWrapper>
)

export default Menubar
