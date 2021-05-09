import React from 'react'
import Order from '../static/table.jpg'
import checkList from '../static/checklist.svg'
import './OrderNow.css'

class OrderNow extends React.Component {
  render() {
    return(
      <div className="OrderNow">
        <div className="OrderSplit">
          <div>
            <span className="Order-title">Makin rame, makin hemat!</span>
            <p className="Caption">Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. 
              Cocok untuk hidangan segala acara!</p>
            <div className="Check-lists">
              <div className="Check-list-item">
                <img src={checkList} alt="Group" class="Checks"/>
                <span className="Entry">Beragam pilihan menu</span>
              </div>
              <div className="Check-list-item">
                <img src={checkList} alt="Group" class="Checks"/>
                <span className="Entry">Semua menu diskon 20%</span>
              </div>
              <div className="Check-list-item">
                <img src={checkList} alt="Group" class="Checks"/>
                <span className="Entry">Gratis biaya kirim</span>
              </div>
            </div>
            <button className="Button">Pesan Sekarang</button>
          </div>
          <img src={Order} alt="Group" className="Group-photo"/>
        </div>
      </div>
    )
  }
}

export default OrderNow