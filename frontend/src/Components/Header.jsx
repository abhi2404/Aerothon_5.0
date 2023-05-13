import React from "react";
import "./CSS/HeaderS.css";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <div className="container-fluid  header">
        <div className="heading ">
          <LinkContainer to="/">
            <div className="logo">
              <p style={{ color: "white" }}>EcoPlane</p>
            </div>
          </LinkContainer>
          <div className="navItems">
            <div className="navlist">
              <LinkContainer to="/login">
                <ul>
                  <li>Login</li>
                </ul>
              </LinkContainer>
            </div>
            <div className="navlist">
              <LinkContainer to="/register">
                <ul>
                  <li>Register</li>
                </ul>
              </LinkContainer>
            </div>
            <div className="navlist">
              <LinkContainer to="/aeroparts">
                <ul>
                  <li>Aeroparts</li>
                </ul>
              </LinkContainer>
            </div>
            <div className="navlist">
              <LinkContainer to="/about">
                <ul>
                  <li>About</li>
                </ul>
              </LinkContainer>
            </div>
            <div className="navlist">
              <LinkContainer to="/contact">
                <ul>
                  <li>Contact Us</li>
                </ul>
              </LinkContainer>
            </div>
            <div className="navlist">
              <LinkContainer to="/add-tool">
                <ul>
                  <li>Add Tool</li>
                </ul>
              </LinkContainer>
            </div>
          </div>
        </div>
        <div className="headings1 ">
          <ul>
            <li>
              <div>Hello Site visitor</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
