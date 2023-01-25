import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCloudSnow } from "react-icons/bs";
import { AiOutlineLeftCircle } from "react-icons/ai";
import "./Places.css";

// Cities Info is the repeating Unit Used in Places.css

const CitiesInfo = ({ cityName, location, temp, byAir, distance }) => {
  return (
    <div className="locationsInfo">
      <div className="info">
        <div className="flexSettingsFront">
          <CiLocationOn />
          <h6>{cityName}</h6>
          <BsCloudSnow /> {temp}
        </div>
        <p>{location}</p>
      </div>

      <div>
        <p className="label">byAir</p>
        <div className="flexSettings">
          <AiOutlineLeftCircle />
          <p>{distance}</p>
        </div>
      </div>

      <div className="flexSettings">
        <AiOutlineLeftCircle />
        <p className="label">{byAir}</p>
      </div>
    </div>
  );
};

export default CitiesInfo;
