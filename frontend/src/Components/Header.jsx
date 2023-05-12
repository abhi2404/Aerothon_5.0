import React from "react";
import "./CSS/HeaderS.css";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <div className="banner">
                <p>The Ultimate Environment Website !!!!!</p>
            </div>
            <div className="container-fluid  header">
                <div className="heading ">
                    <LinkContainer to='/'>
                        <div className="logo">
                            <p>EcoPlane</p>
                        </div>
                    </LinkContainer>

                    <div className="navlist">
                        <LinkContainer to='/login'>
                            <ul>
                                <li >Login</li>
                            </ul>
                        </LinkContainer>
                    </div>
                    <div className="navlist">
                        <LinkContainer to='/tools'>
                            <ul>
                                <li >Tools</li>
                            </ul>
                        </LinkContainer>
                    </div>
                    <div className="navlist">
                        <LinkContainer to='/add-tool'>
                            <ul>
                                <li >Add a Tool</li>
                            </ul>
                        </LinkContainer>
                    </div>
                </div>
                <div className="headings1 ">
                    <ul>
                        <li><div>Hello Site visitor</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
