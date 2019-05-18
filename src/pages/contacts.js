import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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

const UnstyledContactsPage = ({ className, ...pageContext }) => {
  const [values, setValues] = useState({})

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
    <Layout className={className} pageContext={pageContext}>
      <SEO title="Contatti" />
      <h1>Contatti</h1>
      <p>
        Puoi contattarmi al mio indirizzo e-mail{" "}
        <a href="mailto:einnocentisedili@gmail.com">
          einnocentisedili@gmail.com
        </a>
      </p>
      <TextDivider>Oppure utilizza il modulo di contatto</TextDivider>
      <h2>Modulo di contatto</h2>
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
            Il tuo nome:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <label>
            La tua email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <label>
            Messaggio:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </FieldRow>
        <FieldRow>
          <Button type="submit">Invia</Button>
        </FieldRow>
      </form>
    </Layout>
  )
}

const ContactsPage = styled(UnstyledContactsPage)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default ContactsPage
