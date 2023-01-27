import React from 'react'
import {Places}  from "../components/index"

// Although The app contains a single page but in order to make the code simple the page is divided into two parts the headers(Front.js) and the places(Location.js)

// The Second Part Of the page including the Map and the places info with their temprature and distance
const Location = () => {
  return (
    <div>
      <Places/>
    </div>
  )
}

export default Location
