import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useI18n } from "../hooks/useI18n"

export const LanguageSwitcherWrapper = styled.div``

const LanguageSwitcher = () => {
  const { t, lng } = useI18n("core")

  return (
    <LanguageSwitcherWrapper>
      <Link to={lng === "en" ? "/" : "/en"}>{t("changeLanguage")}</Link>
    </LanguageSwitcherWrapper>
  )
}

export default LanguageSwitcher
