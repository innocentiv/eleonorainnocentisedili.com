import styled from "styled-components"

export const Content = styled.main`
  background-color: ${props => props.theme.content.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default Content
