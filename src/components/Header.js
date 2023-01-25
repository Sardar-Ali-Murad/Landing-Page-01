import React from 'react'
import Pic from "../img/man.png"
import "./Headers.css"

// The most upperPart and is the part of Front.js in pages
const Header = () => {
  return (
    <div className='div-center-60 headersMain'>
      <h5 className='label'>I'm going...</h5>
      <div>
       <img src={Pic}/>
       <p>Albert Floresko</p>
      </div>
    </div>
  )
}

export default Header
