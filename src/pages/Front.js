import  {Headers,Search,Check}  from "../components/index"
import React from 'react'
import "./front.css"

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
