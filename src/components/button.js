import styled from "styled-components"

export const Button = styled.button`
  background-color: ${props => props.theme.colors.darkgray};
  color: ${props => props.theme.colors.white};
  min-width: 8em;
  text-align: center;
  border: none;
  padding: 0.3em;
`

export default Button
