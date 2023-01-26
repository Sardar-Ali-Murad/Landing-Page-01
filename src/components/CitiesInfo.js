import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCloudSnow } from "react-icons/bs";
import { AiOutlineLeftCircle } from "react-icons/ai";
import "./Places.css";
import cloud from "../img/cloud.png"
import {BsStopwatch}  from "react-icons/bs"

// Cities Info is the repeating Unit Used in Places.css

const CitiesInfo = ({ cityName, location, temp, byAir, distance,icon }) => {
  return (
    <div className="locationsInfo">
      <div className="info">
          <CiLocationOn className="locationIcon" />
          <div>
        <div className="flexSettingsFront">
          <h6>{cityName}</h6>
          <div className="cloud">
          <img src={cloud}/>
          {temp}
          </div>
        </div>
        <p>{location}</p>
          </div>
      </div>

      <div className="travel">
        <p className="soFar">Traveled so far </p>
         <div className="flexSettings">
        <AiOutlineLeftCircle className="distanceIcon"/>
        <p className="byAirDistance">{byAir}</p>
      </div>
      </div>

    
       <div className="flexSettings">
          <BsStopwatch className="watch"/>
          <p className="distance">{distance}</p>
        </div>

        {icon}
    </div>
  );
};

export default CitiesInfo;
