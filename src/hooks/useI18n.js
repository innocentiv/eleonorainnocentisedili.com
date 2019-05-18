import { useTranslation } from "react-i18next"
import { useContext } from "react"
import PageContext from "../utils/pageContext"

const DEFAULT_LANGUAGE = "it"

const languageFromPage = path => {
  const [, lng] = path.match(/^\/([a-z]{2})(?:\/|$)/) || []
  return lng || DEFAULT_LANGUAGE
}

const setLanguage = (i18n, lng) => {
  if (i18n.language === lng) return
  i18n.changeLanguage(lng)
}

const createI18nUrl = lng => url => {
  const urlPrefix = lng === DEFAULT_LANGUAGE ? "/" : `/${lng}/`
  return urlPrefix + url.replace(/^\//, "")
}

export function useI18n(namespace) {
  const { t, i18n } = useTranslation(namespace)
  const { location } = useContext(PageContext)

  const lng = languageFromPage(location.pathname)
  setLanguage(i18n, lng)
  const i18nUrl = createI18nUrl(lng)

  return { t, i18n, lng, i18nUrl }
}

export default useI18n
