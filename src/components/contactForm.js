import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import useI18n from "../hooks/useI18n"
import Button from "./button"

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const TextDivider = styled.p`
  margin: 5em 0;
  color: ${props => props.theme.colors.gray};
  font-style: italic;
`

const FieldRow = styled.p`
  max-width: 520px;
  margin: 0 auto 1em;

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    min-height: 8em;
  }
`

const ContactForm = () => {
  const [values, setValues] = useState({})
  const { t } = useI18n("contacts")

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <>
      <h1>{t("emailTitle")}</h1>
      <p>
        {t("emailDescription")}{" "}
        <a href="mailto:einnocentisedili@gmail.com">
          einnocentisedili@gmail.com
        </a>
      </p>
      <TextDivider>{t("moduleDescription")}</TextDivider>
      <h2>{t("moduleTitle")}</h2>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <FieldRow hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <label>
            {t("moduleName")}
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <label>
            {t("moduleEmail")}
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <label>
            {t("moduleMessage")}
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <Button type="submit">{t("send")}</Button>
        </FieldRow>
      </form>
    </>
  )
}

export default ContactForm
