import React from "react";
import './Card.css'
const Card = ({img, title, author, description}) => {
  return (
    <div className='card'>
      <img src={img} />
      <div className='card-body'>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
