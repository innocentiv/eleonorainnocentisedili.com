import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Title from "./title"
import Menubar from "./menubar"
import { mixin } from "./theme"

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.header.background};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  z-index: 1;
  ${mixin.boxShadow}

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <Title />
    </Link>
    <Menubar />
  </HeaderWrapper>
)

export default Header
