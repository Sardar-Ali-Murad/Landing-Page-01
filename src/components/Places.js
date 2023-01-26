import React from "react";
import "./Places.css";
import Pic from "../img/pic.png";
import Button from "@mui/material/Button";
import CitiesInfo from "./CitiesInfo";
import Map from "../img/map.png";
import {BsChevronDown}  from "react-icons/bs"
import {BsChevronUp}  from "react-icons/bs"
import StaticBar from "./StaticBar";
const Places = () => {
  return (
    <div className="placesBigMain">
    <div className="placesMain ">
      <StaticBar/>
      {/* Part 1 Starts */} 
      <div className="placesInfo">
        <h5>We found 3 best stops for your way</h5>

        {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Koln, Germany"
          location="Schagbaumsweg 1, 51067"
          temp="14°"
          byAir="22,55 km"
          distance="19 mins"
          icon={<BsChevronUp/>}
        />



        {/* Section 2 starts */}
        <div className="seeMore">
          <img src={Pic} />
          <div className="seeMoreContent">
            <h4>Theater des Westens</h4>
            <p>
              One of the most famous theatres <br/> for musicals and operettas in
              Berlin
            </p>
            <Button variant="outlined">See More</Button>
          </div>
        </div>

        <div className="line"></div>
        {/* Section 2 ends */}

       {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Frankfurt,Germany"
          location="Strassburgallee 56, 53044"
          temp="13°"
          byAir="54 km "
          distance="55 mins"
          icon={<BsChevronDown/>}
          />

         <div className="line"></div>

        {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Hamburg, Germany"
          location="Mungstrasse 22, 53032"
          temp="11°"
          byAir="103 km "
          distance="11 hour"
          icon={<BsChevronDown/>}
          
          />
      </div>

      {/* Part 1 Ends */}

      {/* Part 2 Map Starts */}

      <div className="mapMain">
        <img src={Map} className="map" />
      </div>
      {/* Part 2 Map Ends */}


    </div>
          </div>
  );
};

export default Places;
