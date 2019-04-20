import React from "react"
import styled from "styled-components"

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

const Title = props => (
  <TitleWrapper {...props}>
    <FirstWord>Eleonora </FirstWord>
    <SecondWord>Innocenti </SecondWord>
    <ThirdWord>Sedili</ThirdWord>
  </TitleWrapper>
)

export default Title
