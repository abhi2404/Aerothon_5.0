import React, {useEffect} from "react";
import "./CSS/HeaderS.css";
import { LinkContainer } from "react-router-bootstrap";

function Header({auth, setAuth}) {
    
    const isLogin = !!localStorage.getItem('token')
    const handleLogout = () => {
        localStorage.removeItem('token')
        setAuth(false)
    }
    useEffect(() => {
        const isLogin = !!localStorage.getItem('token')
        if(isLogin){
            setAuth(true)
        }
    }, [auth])
    
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
                        {!isLogin ? <>
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
                            </div></> : <div className="navlist">
                            <ul onClick ={handleLogout}>
                                <li>Logout</li>
                            </ul>
                        </div>
                        }

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
