import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { MdMenu, MdClose } from "react-icons/md"
import { media, mixin } from "./theme"

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

  a {
    padding: 1em;
    display: block;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
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
        {menuOpen ? <MdClose /> : <MdMenu />}
      </MenuButton>
      {menuOpen && (
        <MenuWrapper>
          <Link to="/bio">Bio</Link>
          <Link to="/contacts">Contatti</Link>
          <Link to="/">Opere</Link>
          <Link to="/texts">Testi</Link>
        </MenuWrapper>
      )}
    </>
  )
}

export default Menu
