import React, { useContext } from 'react';
import './Main.scss'
import '../../assets/Assets'
import { assets } from '../../assets/Assets';
import { Context } from '../../context/Context';

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSent();
    }
  }

  return (
    <div className="main">

        <div className="nav">
            <p>HAL-1000</p>
            <img src={assets.user} alt="" />
        </div>

        <div className="main-container">

          {!showResult
          ?
          <>
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
          </>
          :<div className='result'>
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.hal} alt="" />
              {loading
              ?<div className='loader'>
                <hr/>
                <hr/>
                <hr/>
              </div>
              :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              
            }
            </div>
          </div>
          }


        </div>

        <div className="search-container">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} 
            value={input} 
            onKeyDown={handleKeyDown}
            type="text" 
            placeholder='Enter a promp here'/>
            <div>
              <img src={assets.image} alt="" />
              <img src={assets.mic} alt="" />
              <img onClick={()=>onSent()} src={assets.send} alt="" />
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