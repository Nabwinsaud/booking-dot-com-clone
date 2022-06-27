import React from "react";
import "./explore.style.css";
import { exploreImage } from "../data";
const Explore = () => {
  return (
    <div className="explore">
      <div className="explore-country">
        <h3>Explore Nepal</h3>
        <p>These popular destination has a lot of offer</p>
        <div className="explore-components">
          {/* data fetch */}
          {exploreImage.map((explore, indx) => {
            return (
              <>
                <div className="explore-images" key={indx}>
                  <img src={explore.img} alt={explore.place} />
                  <div className="explore-title">
                    {/* <h4>Pokhara</h4> */}
                    <h4>{explore.place}</h4>
                    {/* <p>600 properties</p> */}
                    <p>{`${explore.properties} properties`}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
