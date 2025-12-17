
import React from 'react';;
const DogCard = ({ name, breed, age, imageSrc }) => {
    return (
        <div className="dog-card">
            <img src={imageSrc} alt={`Photo of ${name}, a ${breed}`} />
            
            <h3>{name}</h3>
            <p>Breed: {breed}</p>
            <p>Age: {age} years</p>
            
        
            <a href="/adoption-form" className="button">Adopt Me</a>
        </div>
    );
};

export default DogCard;