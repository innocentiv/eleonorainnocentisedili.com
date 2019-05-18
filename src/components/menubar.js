import React from "react"
import styled from "styled-components"
import { useI18n } from "../hooks/useI18n"
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
  const { t, i18nUrl } = useI18n("menu")

  return (
    <MenubarWrapper>
      <MenuItem to={i18nUrl("/bio")}>{t("biography")}</MenuItem>
      <MenuItem to={i18nUrl("/contacts")}>{t("contacts")}</MenuItem>
      <MenuItem to={i18nUrl("/")}>{t("projects")}</MenuItem>
      <MenuItem to={i18nUrl("/texts")}>{t("texts")}</MenuItem>
      <MenubarExternalLink
        href="https://www.instagram.com/eleonorainnocentisedili/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram aria-label="Instagram" />
      </MenubarExternalLink>
    </MenubarWrapper>
  )
}

export default Menubar
