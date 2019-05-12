import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.lightgray};
  padding: 0.5em 1em;
  text-align: center;
  font-size: 0.8rem;
`

const Footer = () => {
  const { t, i18n } = useTranslation("footer")
  const lng = i18n.language
  return (
    <FooterWrapper>
      {t("copyright")}
      <Link to={`/${lng}/contacts`}>{t("contacts")}</Link>
    </FooterWrapper>
  )
}

export default Footer
