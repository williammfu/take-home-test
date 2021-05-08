import './App.css'
import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Catalog from './Catalog'
import Partners from './Partners'
import OrderNow from './OrderNow'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Catalog />
        <Partners />
        <OrderNow />
      </div>
    );
  }
}

export default App;
