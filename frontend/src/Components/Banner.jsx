import React from "react";
import "./CSS/Banner.css";
import Tree from "../Assets/tree.jpg";
import Features from "./Features";

function Banner() {
  return (
    <div>
      <div className="bannerss my-5">
        <img src={Tree} />
        <div className="textss">
          <h1>EcoPlane</h1>
          <p
            style={{
              marginLeft: "15px",
              textAlign: "center",
              color: "black",
              fontWeight: "600",
            }}
          >
            A dashboard for the circular economy models for aircraft materials
            should provide a clear and concise overview of the key metrics and
            data related to the recycling and repurposing of end-of-life
            aircraft components
          </p>
        </div>
      </div>

      <Features />
    </div>
  );
}

export default Banner;
