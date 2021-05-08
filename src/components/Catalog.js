import React from 'react'
import CatalogItem from './CatalogItem'
import Sushi from '../static/sushi.jpg'
import Gyudon from '../static/gyudon.jpg'
import FishChips from '../static/fish-chips.jpg'
import './Catalog.css'

class Catalog extends React.Component {
  render() {
    return(
      <div className="Catalog Paddings">
        <span className="Title">Hangry! adalah restoran dengan beragam brand</span>
        <span className="Subtitle">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</span>
        <div className="Items">
          <CatalogItem imgSrc={Sushi} vendorName="Sushi" vendorType="Japanese" location="Tangerang"/>
          <CatalogItem imgSrc={Gyudon} vendorName="Gyudon" vendorType="Japanese" location="Tangerang"/>
          <CatalogItem imgSrc={FishChips} vendorName="Fish n' Chips" vendorType="Western" location="Jakarta"/>
        </div> 
      </div>
    )
  }
}

export default Catalog;