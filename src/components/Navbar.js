import React from 'react'
import hangryLogo from '../static/hangry-animated.gif'
import hamburger from '../static/Hamburger_icon.svg'
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.routeRef = React.createRef()
  }

  handleDropDown = () => {
    if(window.innerWidth >= 1040)
      this.routeRef.current.style.display = 'none'
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleDropDown)
  }

  hamburgerClick = () => {
    if (this.routeRef.current.style.display === 'none') {
      this.routeRef.current.style.display = 'grid'
      this.routeRef.current.style.gridTemplateRows = 'repeat(5, minmax(0, 1fr));'
    } else {
      this.routeRef.current.style.display = 'none'
    } 
  }
  
  render() {
    return(
      <div className="App-header Padding-x">
        <div className="Header-full-wrap">
          <a className="Header-logo-wrap" href="/">
            <img src={hangryLogo} alt="Logo" className="Header-logo"/>
          </a>
          <a className="Header-content" href="/">Tentang Kami</a>
          <a className="Header-content" href="/">Semua Outlet</a>
          <a className="Header-content" href="/">Promo</a>
          <a className="Header-content" href="/">Karier</a>
          <a className="Header-content Download" href="/">Download App</a>
          <img src={hamburger} alt="icon" className="Header-menu"
           onClick={this.hamburgerClick.bind(this)}/>
        </div>
        <div className="Mobile-routes" ref={this.routeRef}>
          <a href="/" className="Route-small">Tentang Kami</a>
          <a href="/" className="Route-small">Semua Outlet</a>
          <a href="/" className="Route-small">Promo</a>
          <a href="/" className="Route-small">Karier</a>
          <a href="/" className="Route-small-download">Download App</a>
        </div>
      </div>
    )
  }
}

export default Navbar