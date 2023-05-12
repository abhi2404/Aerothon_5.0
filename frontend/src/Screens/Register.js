import React, { useState } from "react";
import axios from "axios";
import "./CSS/Imageupload.css";
import api_url from "../Config/Config";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

const RegisterScreen = () => {
  let history = useHistory();
  const alert = useAlert();

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
      .post(`${api_url}api/auth/register/`, formData)
      .then((res) => {
        if(res.status ===200 || res.status ===201){
            alert.success("REGISTRATION SUCCESSFUL");
            history.push('/login')
        }
      })
      .catch((err) => {
        alert.error(err.message);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='formWrapper'>
        <div>
          <div className='Imagehead my-5 text-center'>
            <h1>SignIn </h1>
          </div>

          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='container-fluid Formss '>
              <div className=' my-2 py-1 '>
                <div className='row titlebox'>
                  <div className='col-lg-6 col-sm-6  text-center titlehead'>
                    <p>Email</p>
                  </div>
                  <div className='col-lg-6 col-sm-6 titleinp'>
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

              <div className=' my-2 py-1 '>
                <div className='row titlebox'>
                  <div className='col-lg-6 col-sm-6  text-center titlehead'>
                    <p>Name</p>
                  </div>
                  <div className='col-lg-6 col-sm-6 titleinp'>
                    <input
                      type='text'
                      name='name'
                      value={newUser.name}
                      placeholder='Enter Name'
                      onChange={handleChange}
                      rows='3'
                    />
                  </div>
                </div>
              </div>
              <div className=' my-2 py-1 '>
                <div className='row titlebox'>
                  <div className='col-lg-6 col-sm-6  text-center titlehead'>
                    <p>Password</p>
                  </div>
                  <div className='col-lg-6 col-sm-6 titleinp'>
                    <input
                      type="password"
                      name="password"
                      value={newUser.password}
                      placeholder='Enter Password'
                      onChange={handleChange}
                      rows='3'
                    />
                  </div>
                </div>
              </div>

              <div className='container my-5'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 text-center uploadate'>
                    <p> Type of User </p>
                  </div>
                  <div className='col-lg-6 col-sm-6 titleinp px-0'>
                    <input
                      type='radio'
                      value='Manu'
                      name='user_type'
                      checked={newUser.user_type === "Manu"}
                      onChange={handleChange}
                    />
                    Manufactor
                    <input
                      type='radio'
                      value='Airline'
                      name='user_type'
                      checked={newUser.user_type === "Airline"}
                      onChange={handleChange}
                    />
                    Airline
                  </div>
                </div>
              </div>

              <div className='container col-sm-12 uploadbtn my-4 text-center'>
                <input type='submit' />
              </div>
              {isSubmit ? (
                <div>
                  <h2>Your Form has been Submitted!</h2>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
