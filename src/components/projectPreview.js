import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

export const ProjectWrapper = styled.article`
  position: relative;
  display: inline-block;
  overflow: hidden;
`

export const ProjectDescription = styled.div`
  color: ${props => props.theme.colors.white};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  visibility: hidden;

  ${ProjectWrapper}:hover & {
    visibility: visible;
  }
`

export const ProjectTitle = styled.h3`
  margin: 0;
`

export const ProjectDate = styled.span`
  display: block;
`

export const ProjectPreview = ({ project }) => (
  <ProjectWrapper>
    {project.frontmatter.image && (
      <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
    )}
    <Link to={project.fields.slug}>
      <ProjectDescription>
        <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
        <ProjectDate>{project.frontmatter.date}</ProjectDate>
      </ProjectDescription>
    </Link>
  </ProjectWrapper>
)

export default ProjectPreview
