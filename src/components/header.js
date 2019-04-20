import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Title from "./title"

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.header.background};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  z-index: 1;

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
    <Link to="/about">About</Link>
  </HeaderWrapper>
)

export default Header
