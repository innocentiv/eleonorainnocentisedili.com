import React, { useState } from "react"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"
import { media, mixin } from "./theme"
import MenuItem from "./menuitem"

export const MenuWrapper = styled.nav`
  position: absolute;
  top: 100px;
  width: 100vw;
  left: 0;
  top: 100%;
  background: ${props => props.theme.header.background};
  padding: 0.5em 1em;
  text-align: center;
  ${mixin.boxShadow}

  ${MenuItem} {
    display: block;
    padding: 1em;
  }
`

export const MenuButton = styled.button`
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  font-size: 1.5rem;
  padding: 0;
  line-height: 1;
  height: 1em;
  border: 0;
  background: none;

  ${media.phablet`
    display: none;
  `};
`

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <MdClose aria-label="Close Menu" />
        ) : (
          <MdMenu aria-label="Open Menu" />
        )}
      </MenuButton>
      {menuOpen && (
        <MenuWrapper>
          <MenuItem to="/bio">Bio</MenuItem>
          <MenuItem to="/contacts">Contatti</MenuItem>
          <MenuItem to="/">Opere</MenuItem>
          <MenuItem to="/texts">Testi</MenuItem>
        </MenuWrapper>
      )}
    </>
  )
}

export default Menu
