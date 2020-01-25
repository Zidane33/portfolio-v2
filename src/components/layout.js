import React from "react"
import PropTypes from "prop-types"
import MediaQuery from 'react-responsive';
import Nav from './Nav/Nav';
import MobileNav from './Nav/MobileNav';
import "./layout.css"

const globalStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  fontFamily: 'Source Sans Pro',
  color: 'rgb(251, 251, 251)',
  height: '100vh',
  width: '100vw'
}

const Layout = ({ children }) => {

  return (
    <div style={globalStyle}>
        <MediaQuery minWidth={1000}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={999}>
          <MobileNav />
        </MediaQuery>
        {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
