import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
function Features() {
  return (
    <div className="Featurelist">
      <div className="Featurehead">
      <h1 className="featureh1">Unique in Our Website</h1>
      </div>
      
      <div className="line1 my-3 py-5">
        <div class="card1">
          <h1>01</h1>
          <p>Aeroparts</p>
        </div>
      

        <div class="card1">
          <h1>02</h1>
          <p>Add Tool</p>
        </div>

        <div class="card1">
          <h1>03</h1>
          <p>Recycle Your Tool</p>
        </div>
      </div>


      <div className="line1">
        <div class="card1">
          <h1>04</h1>
          <p>Tools Wall</p>
        </div>

        <div class="card1">
          <h1>05</h1>
          <p>Repurposing</p>
        </div>
      </div>
    </div>
  );
}

export default Features;