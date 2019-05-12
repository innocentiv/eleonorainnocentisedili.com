import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { media } from "./theme"
import MenuItem from "./menuitem"
import { FaInstagram } from "react-icons/fa"

export const MenubarWrapper = styled.nav`
  display: none;

  ${media.phablet`
    display: flex;
  `};

  ${MenuItem} + ${MenuItem} {
    margin-left: 1em;
  }
`

export const MenubarExternalLink = styled.a`
  color: ${props => props.theme.colors.lightgray};
  display: inline-block;
  margin-left: 1em;
  font-size: 125%;
  height: 1em;
`

const Menubar = () => {
  const { t, i18n } = useTranslation("header")
  const lng = i18n.language

  return (
    <MenubarWrapper>
      <MenuItem to={`/${lng}/bio`}>{t("biography")}</MenuItem>
      <MenuItem to={`/${lng}/contacts`}>{t("contacts")}</MenuItem>
      <MenuItem to={`/${lng}/`}>{t("projects")}</MenuItem>
      <MenuItem to={`/${lng}/texts`}>{t("texts")}</MenuItem>
      <MenubarExternalLink
        href="https://www.instagram.com/eleonorainnocentisedili/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram aria-label="Instagram" />
      </MenubarExternalLink>
      <button onClick={() => i18n.changeLanguage(lng === "en" ? "it" : "en")}>
        Cambia lingua
      </button>
    </MenubarWrapper>
  )
}

export default Menubar
