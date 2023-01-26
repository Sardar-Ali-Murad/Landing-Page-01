import React from 'react'
import Pic from "../img/man.png"
import "./Headers.css"
import {BsChevronDown}  from "react-icons/bs"


// The most upperPart and is the part of Front.js in pages
const Header = () => {
  return (
    <div className='headersMain'>
      <h5 >I'm going...</h5>
      <div className='headersImage'>
       <img src={Pic}/>
       <p>Albert <br/> Floresko</p>
       <BsChevronDown/>
      </div>
    </div>
  )
}

export default Header
