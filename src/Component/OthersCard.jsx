import React from "react";
import "../Css file/Others.css";
const OthersCard = ({ name, breed, age, imageSrc }) => {
  return (
    <div className="cat-card">
      <img src={imageSrc} alt={`Photo of ${name}, a ${breed} cat`} />

      <h3>{name}</h3>
      <p>Breed: {breed}</p>
      <p>Age: {age} years</p>

      <a href="/adoption-form" className="button">
        Adopt Me
      </a>
    </div>
  );
};

export default OthersCard;
