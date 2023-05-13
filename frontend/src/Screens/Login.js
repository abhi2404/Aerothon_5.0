import React, { useState } from "react";
import axios from "axios";
import "./CSS/Imageupload.css";
// import { useNavigate } from "react-router-dom"
import api_url from "../Config/Config";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const LoginScreen = ({ setAuth }) => {
  let history = useHistory();

  // const navigate = useNavigate()
  const alert = useAlert();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData();
    formData.append("username", newUser.email);
    formData.append("password", newUser.password);

    axios
      .post(`${api_url}api/auth/login/`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert.success("LOGIN SUCCESSFUL");
          const token = res.data.access;
          localStorage.setItem("token", token);
          setAuth(true);
          history.push("/");
        } else {
          alert.error("Some Error Occured");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert.error(err.message);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="formWrapper">
        <div>
          <div className="my-5 text-center">
            <h1>User LogIn</h1>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="container-fluid Formss ">
              <div className=" my-2 py-1 ">
                <div className="row titlebox">
                  <div className="col-lg-6 col-sm-6  text-center titlehead">
                    <p>Email</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 titleinp">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={newUser.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className=" my-2 py-1 ">
                <div className="row titlebox">
                  <div className="col-lg-6 col-sm-6  text-center titlehead">
                    <p>Password</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 titleinp">
                    <input
                      type="password"
                      name="password"
                      value={newUser.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              <div className="container col-sm-12 uploadbtn my-4 text-center">
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
