import React from "react";
import { Link } from "react-router-dom";
import OthersCard from "../Component/OthersCard";
import "../Css file/Others.css";
import "../Css file/Body.css";
import rabbit from "../assets/Imges/Others/Parrot.jpg";
import hamster from "../assets/Imges/Others/hamsters.jpg";
import parrot from "../assets/Imges/Others/Parrot.jpg";
import guinea from "../assets/Imges/Others/Gunia.jpg";

export default function AdoptOthers() {
  return (
    <>
      <Link to="/adopt" className="back-link-Others">
        ← Back to Adoption Page
      </Link>

      <div className="Others-section">
        <h1>Small & Unique Friends</h1>
        <p>
          From fluffy bunnies to chirpy birds, these small companions are 
          looking for a big place in your heart!
        </p>
      </div>

      <div className="Others-list">
        <OthersCard name="Barnaby" breed="Rabbit" age={1} imageSrc={rabbit} />
        <OthersCard name="Nibbles" breed="Hamster" age={0.5} imageSrc={hamster} />
        <OthersCard name="Bluey" breed="Parrot" age={2} imageSrc={parrot} />
        <OthersCard name="Pippin" breed="Guinea Pig" age={1} imageSrc={guinea} />
      </div>
    </>
  );
}