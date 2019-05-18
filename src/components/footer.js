import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useI18n } from "../hooks/useI18n"
import LanguageSwitcher from "./languageSwitcher"

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.lightgray};
  padding: 0.5em 1em;
  text-align: center;
  font-size: 0.8rem;
`

const Footer = () => {
  const { t, i18nUrl } = useI18n("footer")

  return (
    <FooterWrapper>
      {t("copyright")}
      <Link to={i18nUrl("/contacts")}>{t("contacts")}</Link>
      <LanguageSwitcher />
    </FooterWrapper>
  )
}

export default Footer
