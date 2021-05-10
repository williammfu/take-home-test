import React from 'react'
import CatalogItem from './CatalogItem'
import Vendors from '../api/vendors'
import './Catalog.css'

class Catalog extends React.Component {
  state = {
    vendors: []
  }

  componentDidMount() {
    const vendors = Vendors.fetchVendors()
    this.setState({ vendors })
  }

  render() {
    return(
      <div className="Catalog">
        <div className="Catalog-wrap">
          <div className="Title">
            Hangry! adalah restoran dengan beragam brand
          </div>
          <div className="Subtitle">
            Kami menyajikan beragam brand untuk menemani 
            setiap waktu santapmu
          </div>
          <div className="Items">
            { this.state.vendors.map( (vendor, idx) => 
              <CatalogItem key={idx} imgSrc={vendor.img_url} vendorName={vendor.name}
               vendorType={vendor.type} logo={vendor.logo_url} location={vendor.origin}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog;