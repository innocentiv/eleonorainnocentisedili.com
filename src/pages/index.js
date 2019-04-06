import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ margin: "auto", maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p style={{ textAlign: "center" }}>Work in progress</p>
    <p>E’ il 1991 e una giovane coppia bolognese sta tornando a casa la sera della vigilia della Befana. Fa molto freddo e forse è per il ghiaccio sull’asfalto o perché il conducente dell’altra auto ha lavorato anche di sabato dopo una settimana sfiancante, sta di fatto che non possono evitarlo. L’altra macchina gli viene addosso, catapultandoli fuori strada.

Durante quell’incidente sono nata io.

Era mio dovere fare della mia vita qualcosa fuori dall’ordinario.

Volevo essere una scrittrice, un’attrice, una fotografa, una pittrice, una sociologa, una regista, una curatrice, una politologa, una stratega, una giornalista ma poi ho capito che essere un’artista oggi significava essere già un po’ tutto questo.</p>
  </Layout>
)

export default IndexPage
