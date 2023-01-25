import React from "react";
import "./Places.css";
import Pic from "../img/pic.png";
import Button from "@mui/material/Button";
import CitiesInfo from "./CitiesInfo";
import Map from "../img/map.png";

const Places = () => {
  return (
    <div className="div-center-80 placesMain">

      {/* Part 1 Starts */} 
      <div>
        <h5 className="label">We found 3 best stops for your way</h5>

        {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Koln, Germany"
          location="Schagbaumsweg 1, 51067"
          temp="14°"
          byAir="22,55 km"
          distance="19 mins"
        />

        {/* Section 2 starts */}
        <div className="seeMore">
          <img src={Pic} />
          <div>
            <h4>Theater des Westens</h4>
            <p className="label">
              One of the most famous theatres for musicals and operettas in
              Berlin
            </p>
            <Button variant="outlined">See More</Button>
          </div>
        </div>
        {/* Section 2 ends */}

       {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Frankfurt, Germany"
          location="Strassburgallee 56, 53044"
          temp="13°"
          byAir="54,20 km "
          distance="55 mins"
        />

        {/* Repeating Unit Cities Info */}
        <CitiesInfo
          cityName="Hamburg, Germany"
          location="Mungstrasse 22, 53032"
          temp="11°"
          byAir="103 km "
          distance="11 hour"
        />
      </div>

      {/* Part 1 Ends */}

      {/* Part 2 Map Starts */}

      <div>
        <img src={Map} />
      </div>
      {/* Part 2 Map Ends */}


    </div>
  );
};

export default Places;
