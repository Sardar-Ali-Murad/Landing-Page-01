import React from 'react'
import "./Places.css"
import {CiLocationOn}  from "react-icons/ci"
import {BsCloudSnow}  from "react-icons/bs"
import {AiOutlineLeftCircle}  from "react-icons/ai"


const CitiesInfo = ({cityName,location,temp,byAir,distance}) => {
  return (
       <div className='locationsInfo'>


<div className='info'>
<div style={{display:"flex",alignItems:"center",gap:"20px"}}>
<CiLocationOn/>
   <h6>{cityName}</h6>
   <BsCloudSnow/> {temp}
</div>
<p>{location}</p>
</div>

<div>
  <p className='label'>byAir</p>
  <div style={{display:"flex",alignItems:"center"}}>
      <AiOutlineLeftCircle/>
      <p>{distance}</p>
  </div>
</div>


<div style={{display:"flex",alignItems:"center"}}>
  <AiOutlineLeftCircle/>
  <p className='label'>19 min</p>
</div>

</div>

  )
}

export default CitiesInfo
