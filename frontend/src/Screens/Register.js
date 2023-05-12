import React, { useState } from "react";
import axios from "axios";
import "./CSS/Imageupload.css";

const RegisterScreen = () => {

  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    user_type: "Manu",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData();
    formData.append("name", newUser.name);
    formData.append("email", newUser.email);

    formData.append("password", newUser.password);
    formData.append("user_type", newUser.user_type);

    axios
      .post("http://192.168.1.101:8000/api/auth/register/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };


  return (
    <>

      <div className="formWrapper">

        <div >
          <div className="Imagehead my-5 text-center">
            <h1>SignIn </h1>
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
                      placeholder="Email"
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
                    <p>Name</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 titleinp">
                    <input
                      type="text"
                      name="name"
                      value={newUser.name}
                      placeholder="Enter Name"
                      onChange={handleChange}
                      rows="3"
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

              <div className="container my-5">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 text-center uploadate">
                    <p> Type of User </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 titleinp px-0">
                    <input type="radio" value="manu" name="manu" /> Manufactor
                    <input type="radio" value="Airline" name="gender" /> Airline
                  </div>

                </div>
              </div>



              <div className="container col-sm-12 uploadbtn my-4 text-center">

                <input type="submit" />
              </div>
              {isSubmit ? <div>
                <h2>Your Sign in has been Submitted!</h2>
              </div> : null}


            </div>
          </form >
        </div >
      </div>
    </>
  );
};

export default RegisterScreen;
