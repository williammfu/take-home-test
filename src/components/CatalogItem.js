import React from 'react'
import './CatalogItem.css'

class CatalogItem extends React.Component {
  render() {
    return(
      <div className="CatalogItem">
        <div className="Image-absolute">
          <img src={this.props.imgSrc} alt="Vendor" className="Catalog-image"/>
          <div className="Catalog-logo">
            <img src={this.props.logo}
             alt="Profile" className="Catalog-logo-img"/>
          </div>
        </div>
        <div className="Description">
          <div className="Name-and-arrow">
            <span className="Vendor-name">{this.props.vendorName}</span>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" 
            xmlns="http://www.w3.org/2000/svg" className="Arrow">
              <path d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z" fill="#A30926"/>
            </svg>
          </div>
          <div className="Name-and-arrow"></div>
          <div className="Vendor-other">{this.props.vendorType} · {this.props.location}</div>
        </div>
      </div>
    )
  }
}

export default CatalogItem;