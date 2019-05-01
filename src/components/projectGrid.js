import React from "react"
import styled from "styled-components"
import { media } from "./theme"
import ProjectPreview, { ProjectWrapper } from "./projectPreview"

export const ProjectGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ProjectWrapper} {
    margin: 3% 0;
    width: 100%;

    ${media.phablet`
      margin: 2%;
      width: 46%;
    `}

    ${media.desktop`
      margin: 2%;
      width: 29.3%;
    `}
  }
`

const ProjectGrid = ({ projects, ...props }) => (
  <ProjectGridWrapper {...props}>
    {projects.map(({ node }) => (
      <ProjectPreview project={node} key={node.fields.slug} />
    ))}
  </ProjectGridWrapper>
)

export default ProjectGrid