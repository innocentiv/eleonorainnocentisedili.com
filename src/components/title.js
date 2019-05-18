import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import useI18n from "../hooks/useI18n"

export const FirstWord = styled.span`
  color: ${props => props.theme.colors.gray};
`

export const SecondWord = styled.span`
  color: ${props => props.theme.colors.lightgray};
`

export const ThirdWord = styled.span`
  color: ${props => props.theme.colors.white};
`
export const TitleWrapper = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-transform: lowercase;
`

export const TitleLink = styled(Link)`
  text-decoration: none;
`

const Title = props => {
  const { i18nUrl } = useI18n()
  return (
    <TitleWrapper {...props}>
      <TitleLink to={i18nUrl("/")}>
        <FirstWord>Eleonora </FirstWord>
        <SecondWord>Innocenti </SecondWord>
        <ThirdWord>Sedili</ThirdWord>
      </TitleLink>
    </TitleWrapper>
  )
}

export default Title
