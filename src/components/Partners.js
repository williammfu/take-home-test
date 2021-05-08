import React from 'react'
import GoFood from '../static/go-food.png'
import GrabFood from '../static/grab-food.png'
import Traveloka from '../static/eats-traveloka.png'
import Zomato from '../static/zomato.png'
import './Partners.css'

class Partners extends React.Component {

  render() {
    return(
      <div className="Partners">
        <span>Hangry! dapat kamu temukan di</span>
        <div className="Partners-logo">
          <img src={GoFood} alt="go-food" className="Logo"/>
          <img src={GrabFood} alt="grab-food" className="Logo"/>
          <img src={Zomato} alt="zomato" className="Logo"/>
          <img src={Traveloka} alt="traveloka" className="Logo"/>
        </div>
      </div>
    )
  }
}

export default Partners