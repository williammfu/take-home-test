import React from 'react'
import hangryLogo from '../static/hangry-animated.gif'
import hamburger from '../static/Hamburger_icon.svg'
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    return(
      <div className="App-header Padding-x">
          <a className="Header-logo-wrap" href="/">
            <img src={hangryLogo} alt="Logo" className="Header-logo"/>
          </a>
          <a className="Header-content" href="/">Tentang Kami</a>
          <a className="Header-content" href="/">Semua Outlet</a>
          <a className="Header-content" href="/">Promo</a>
          <a className="Header-content" href="/">Karier</a>
          <a className="Header-content Download" href="/">Download App</a>
          <img src={hamburger} alt="icon" className="Header-menu"/>
      </div>
    )
  }
}

export default Navbar