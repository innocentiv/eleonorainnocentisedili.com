import styled from "styled-components"
import { media } from "./theme"

export const Section = styled.section`
  background-color: ${props => props.color && props.theme.colors[props.color]};
  max-width: ${props =>
    props.fullWidth ? "100%" : props.theme.content.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 3%;

  ${media.phablet`
    padding: 2%;
  `}
`

export default Section
