import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Menu from '../components/menu'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h1>Hey now</h1>
    <p>Welcome to my sample site.</p>
    <p>Yeah dawg.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
