import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div>
        <Header />
      </div>
      <Footer />
    </div>
  )
}


export default Layout
