import React from "react";
import "./CSS/Banner.css";
import Tree from "../Assets/tree.png";
import Features from './Features'

function Banner() {
  return (
    <div>
      <div className="bannerss my-5">
        <img src={Tree} />
        <div className="textss">
          <h1>EcoPlane</h1>
        </div>
      </div>

      <Features/>
    </div>
  );
}

export default Banner;
