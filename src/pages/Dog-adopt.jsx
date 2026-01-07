
import React from 'react';
import '../Css file/Adopt-section.css'; 
import DogCard from '../Component/DogCard';
import img1 from '../assets/Imges/dogs/Labrador.jpg';
import img2 from '../assets/Imges/dogs/german-shepherd.jpeg';
import img3 from '../assets/Imges/dogs/Chihuahua_Breed.png';
import img4 from '../assets/Imges/dogs/local1.jpeg';
import img5 from '../assets/Imges/dogs/Himalayan_sheep_dog.jpg';
import img6 from '../assets/Imges/dogs/local2.jpg';


const AdoptDogPage = () => {

    const dogsData = [
        { id: 1, name: 'Khairey', breed: 'Labrador Retriever', age: 3, imageSrc: img1 },
        { id: 2, name: 'Max', breed: 'German Shepherd', age: 4, imageSrc: img2 },
        { id: 3, name: 'Bella', breed: 'Chihuahua', age: 2, imageSrc: img3 },
        { id: 4, name: 'sheru', breed: 'local', age: 2, imageSrc: img4 },
        { id: 5, name: 'Jangey', breed: 'Bhote kukur', age: 2, imageSrc: img5 },
        { id: 6, name: 'Bhola', breed: 'local', age: 2, imageSrc: img6 },
    ];

    return (
            <div className="main-page">
                         <a href="/adopt" className="back-link-dog">
                ← Back to Adoption Page
            </a>

            <div className="dog-section">
                <h1>Adopt a Dog</h1>
                <p>Welcome to the dog adoption section! Here you can find loving dogs looking for their forever homes. Browse through our selection of dogs available for adoption and find your new best friend today!</p>
            </div>

            <div className="dog-list">
                {dogsData.map(dog => (
                    <DogCard
                        key={dog.id}
                        name={dog.name}
                        breed={dog.breed}
                        age={dog.age}
                        imageSrc={dog.imageSrc} 
                    />
                ))}
          </div>
    </div>
    );
};

export default AdoptDogPage;