import './App.css';
import hangryLogo from '../static/hangry-animated.gif'
import hamburger from '../static/Hamburger_icon.svg'
import React from 'react';
import Banner from './Banner'
import CatalogItem from './CatalogItem'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Padding-x">
          <a className="Header-logo-wrap" href="/">
            <img src={hangryLogo} alt="Logo" className="Header-logo"/>
          </a>
          <a className="Header-content" href="/">Tentang Kami</a>
          <a className="Header-content" href="/">Semua Outlet</a>
          <a className="Header-content" href="/">Promo</a>
          <a className="Header-content" href="/">Karier</a>
          <a className="Header-content Download" href="/">Download App</a>
          <img src={hamburger} alt="icon" className="Header-menu"/>
        </header>
        <Banner />
        <CatalogItem />
      </div>
    );
  }
}

export default App;
