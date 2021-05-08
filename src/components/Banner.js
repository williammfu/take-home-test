import React from 'react'
import playStoreBadge from '../static/google-play.png'
import appStoreBadge from '../static/app-store.png'
import mockup from '../static/mockup.png'
import mockupMobile from '../static/mockup-mobile.png'
import './Banner.css'

class Banner extends React.Component {
  render() {
    return(
      <div className="Banner">
        <div className="Heading">
          <div className="Font-small">Kamu lapar atau haus?</div>
          <div className="Font-large">Tenang... ada Hangry! yang siap mengatasi</div>
          <div className="Badges">
            <img src={playStoreBadge} alt="badge-play-store" className="Play-store"/>
            <img src={appStoreBadge} alt="badge-play-store" className="App-store"/>
          </div>
        </div>
        <img src={mockup} alt="badge-play-store" className="Mockup"/>
        <img src={mockupMobile} alt="badge-play-store" className="Mockup-mobile"/>
      </div>
    )
  }
}

export default Banner;