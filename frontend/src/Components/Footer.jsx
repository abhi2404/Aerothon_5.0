import React from "react";
import "./CSS/Footer.css";
import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram.png";
import Pinterest from "../Assets/pinterest.png";
import Whatsapp from "../Assets/whatsapp.png";

function Footer() {
  return (
    <div>
      <div className="footer container-fluid ">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 footerb">
            <h1>EcoPlane</h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 footerb1">
            <h1> LINKS </h1>
            <ul>
              <li>Upload Tools</li>
              <li>Tools Wall</li>
              <li>Recycle Your Tool</li>
              <li>Repurposing </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 footerb2">
            <div className="footerb21">
              <p>Subscribe For Newsletter</p>
              <div className="row newletter">
                <div className="col-sm-8 inptbox">
                  <form>
                    <input />
                  </form>
                </div>
                <div className="col-sm-4 btnbox">
                  <p className="subscribe-text">Subscribe</p>
                </div>
              </div>

              <h6>Follow us on Social Media</h6>

              <div className="row Socialbtn">
                <div className="col-sm-3 btnss">
                  <img src={Pinterest} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Facebook} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Whatsapp} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Instagram} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
