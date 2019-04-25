import styled from "styled-components"

export const Section = styled.section`
  background-color: ${props => props.color && props.theme.colors[props.color]};
  max-width: ${props =>
    props.fullWidth ? "100%" : props.theme.content.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 1em;
`

export default Section
