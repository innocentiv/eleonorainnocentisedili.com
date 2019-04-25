import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { mixin, media } from "./theme"

export const ProjectTitle = styled.h3`
  margin: 0;
  text-align: right;

  ${media.hover("hover")`
    margin-top: 1em;
    text-align: center;
  `}
`

export const ProjectDate = styled.span`
  display: block;
`

export const ProjectWrapper = styled.article`
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  ${mixin.boxShadow}

  &:hover {
    ${mixin.boxShadowHover}
  }
`

export const ProjectImg = styled(Img)`
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${ProjectWrapper}:hover & {
    transform: scale(1.1);
  }
`

export const ProjectDescription = styled.div`
  color: ${props => props.theme.colors.white};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1.5em;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${media.hover("hover")`
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
  `}

  ${ProjectWrapper}:hover & {
    visibility: visible;
  }
`

export const ProjectPreview = ({ project }) => (
  <ProjectWrapper>
    {project.frontmatter.image && (
      <ProjectImg fluid={project.frontmatter.image.childImageSharp.fluid} />
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
