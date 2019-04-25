import { Link } from "gatsby"
import styled from "styled-components"

export const MenuItem = styled(Link).attrs(props => ({
  activeStyle: { color: props.theme.colors.white },
}))`
  text-decoration: none;
  color: ${props => props.theme.colors.lightgray};
  font-weight: bold;
`

export default MenuItem
