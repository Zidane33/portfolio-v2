import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
