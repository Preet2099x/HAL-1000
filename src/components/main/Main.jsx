import React from 'react';
import './Main.scss'
import '../../assets/Assets'
import { assets } from '../../assets/Assets';

const Main = () => {
  return (
    <div className="main">

        <div className="nav">
            <p>HAL-1000</p>
            <img src={assets.user} alt="" />
        </div>

        <div className="main-container">

          <div className="header">
            <p><span>Hello, Anmol</span></p>
            <p>How can I help you today?</p>
          </div>

          <div className="cards">

            <div className="card">
              <p>Card 1</p>
              <img src="#" alt="" />
            </div>

            <div className="card">
              <p>Card 2</p>
              <img src="#" alt="" />
            </div>

            <div className="card">
              <p>Card 3</p>
              <img src="#" alt="" />
            </div>

            <div className="card">
              <p>Card 4</p>
              <img src="#" alt="" />
            </div>

          </div>
        </div>
    </div>
  )
}

export default Main;