import React, { useState } from "react";
import axios from "axios";
import "./CSS/Imageupload.css";

const RegisterScreen = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    photo: "",
    description: "",
    date: "",
    location:""
  });
  const [isSubmit,setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("date", newUser.date);
    formData.append("name", newUser.name);
    formData.append("description", newUser.description);
    formData.append("location",newUser.location)

    axios
      .post("/api/upload/", formData)
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

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <>
    
        <div>
           <div className="Imagehead my-5 text-center">
        <h1>Upload a Photo</h1>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="container-fluid Formss ">
          <div className=" my-2 py-1 ">
            <div className="row titlebox">
              <div className="col-lg-6 col-sm-6  text-center titlehead">
                <p>Title</p>
              </div>
              <div className="col-lg-6 col-sm-6 titleinp">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 col-sm-6 titledesc text-center">
                <p>Description</p>
              </div>
              <div className="col-lg-6 col-sm-6 titleinp px-0">
                <textarea
                  type="text"
                  name="description"
                  value={newUser.description}
                  placeholder="Enter Description"
                  onChange={handleChange}
                  rows="3"
                />
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 col-sm-6 titledesc text-center">
                <p>Location</p>
              </div>
              <div className="col-lg-6 col-sm-6 titleinp px-0">
                <textarea
                  type="text"
                  name="location"
                  value={newUser.location}
                  placeholder="Enter Location"
                  onChange={handleChange}
                  rows="3"
                />
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 col-sm-6 text-center uploadate">
                <p> Date Of Report </p>
              </div>
              <div className="col-lg-6 col-sm-6 text-center">
                <input
                  type="date"
                  name="date"
                  value={newUser.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="container my-4">
            <div className="row">
              <div className="col-lg-6 col-sm-6 text-center uploadphoto">
                <p>Upload An Image</p>
              </div>

              <div className="col-lg-6 col-sm-6 text-center">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={handlePhoto}
                />
              </div>
            </div>
          </div>

          
          <div className="container col-sm-12 uploadbtn my-4 text-center">

          <input type="submit" />
            </div>
          {isSubmit? <div>
            <h2>Your form has been Submitted!</h2>
          </div>: null }
          
         
        </div>
      </form>
        </div>
     
    </>
  );
};

export default RegisterScreen;
