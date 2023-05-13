import React from "react";
import './Card.css'


const Card = ({ img, title, author, description }) => {

  return (

    <div className='card'>
      <img src={img} style={{ borderRadius: "8px 8px 2px 2px ", borderColor: "black", height: "200px" }} />
      <div className='card-body'>
        <h2 style={{ fontWeight: "bold" }}>{title}</h2>
        <p style={{ fontWeight: "600" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
