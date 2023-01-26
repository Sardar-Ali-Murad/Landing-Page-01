import React from 'react'
import Pic1 from "../img/01.png"
import Pic2 from "../img/mes.png"
import Pic3 from "../img/03.png"
import Pic4 from "../img/04.png"
import "./StaticBar.css"


// The Fixed Part
const StaticBar = () => {
  return (
    <div className='staticBarMain'>
      <div className='singleBar'>
        <img src={Pic1}/>
        <p className='theter singleBar' style={{color:"#383FF1"}}>Thatres</p>
      </div>
      <div className='singleBar'>
        <img src={Pic2}/>
        <p className='label'>Museums</p>
      </div>
      <div className='singleBar'>
        <img src={Pic3}/>
        <p className='label'>Parks</p>
      </div>
      <div className='singleBar'>
        <img src={Pic4}/>
        <p className='label'>Bars</p>
      </div>
    </div>
  )
}

export default StaticBar
