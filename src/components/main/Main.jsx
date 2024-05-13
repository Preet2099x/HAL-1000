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
            <p><span>How can I help you today?</span></p>
          </div>

          <div className="cards">

            <div className="card">
              <p>Teach me the concept of game theory in simple terms.</p>
              <img src={assets.idea} alt="" />
            </div>

            <div className="card">
              <p>Write a program to print fibonacci series in Python.</p>
              <img src={assets.code} alt="" />
            </div>

            <div className="card">
              <p>Write a short story about interstellar travel.</p>
              <img src={assets.write} alt="" />
            </div>

            <div className="card">
              <p>Act like Darth Vader from Star Wars.</p>
              <img src={assets.act} alt="" />
            </div>

          </div>
        </div>

        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder='Enter a promp here'/>
            <div>
              <img src={assets.image} alt="" />
              <img src={assets.mic} alt="" />
              <img src={assets.send} alt="" />
            </div>
          </div>
          <p className='small-text'>
          HAL-1000 may display inaccurate info, including about people, so double-check its responses.
          </p>

        </div>
    </div>
  )
}

export default Main;