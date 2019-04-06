import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.background};
  padding: 1em;
  min-height: 30vh;
  margin-bottom: 2em;
  display: flex;
  align-items: flex-end;
`

const FirstWord = styled.span`
  color: ${props => props.theme.colors.gray};
`

const SecondWord = styled.span`
  color: ${props => props.theme.colors.lightgray};
`

const ThirdWord = styled.span`
  color: ${props => props.theme.colors.white};
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" style={{ textDecoration: `none` }}>
      <h1>
        <FirstWord>Eleonora </FirstWord>
        <SecondWord>Innocenti </SecondWord>
        <ThirdWord>Sedili</ThirdWord>
      </h1>
    </Link>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
