import React from "react"
import styled from "styled-components"
import { media } from "./theme"
import ProjectPreview, { ProjectWrapper } from "./projectPreview"

export const ProjectGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -3%;

  ${media.phablet`
    margin: -2%;
  `}

  ${ProjectWrapper} {
    margin: 3%;
    width: 100%;

    ${media.phablet`
      margin: 2%;
      width: 46%;
    `}

    ${media.desktop`
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
