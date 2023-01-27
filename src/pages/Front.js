import  {Headers,Search,Check}  from "../components/index"
import React from 'react'
import "./front.css"

// Although The app contains a single page but in order to make the code simple the page is divided into two parts the headers(Front.js) and the places(Location.js)

// The Headers Of The Page
const Front = () => {
  return (
    <div className="frontMain">
       <Headers/>
       <Search/>
       <Check/>
    </div>
  )
}

export default Front
