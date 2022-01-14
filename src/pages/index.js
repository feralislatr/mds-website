import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styles from "./index.module.css"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/mayday-logo-circle.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/blog">Go to "Blog"</Link> <br />
      <Link to="/contact">Go to "Contact"</Link> <br />
      <Link to="/donate">Go to "Donate"</Link> <br />
      <Link to="/events">Go to "Events"</Link> <br />
      <Link to="/faq">Go to "FAQ"</Link> <br />
      <Link to="/get-involved">Go to "Get Involved"</Link> <br />
      <Link to="/info">Go to "Info"</Link>
    </p>
  </Layout>
)

export default IndexPage
