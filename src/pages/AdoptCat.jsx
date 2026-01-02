import React from "react";
import { Link } from "react-router-dom";
import CatCard from "../Component/CatCard";
import "../Css file/cat-section.css";
import persian from "../assets/Imges/cat/persian.jpeg";
import siamese from "../assets/Imges/cat/siamese.jpeg";
import bengal from "../assets/Imges/cat/bengal.jpeg";
import local1 from "../assets/Imges/cat/local-cat-1.jpg";
import local2 from "../assets/Imges/cat/local cat 2.jpeg";

export default function AdoptCat() {
  return (
    <>
      <Link to="/adopt" className="back-link-cat">
        ← Back to Adoption Page
      </Link>

      <div className="cat-section">
        <h1>Adopt a Cat</h1>
        <p>
          Find adorable cats looking for their forever homes. Adopt today and
          change a life!
        </p>
      </div>

      <div className="cat-list">
        <CatCard name="Mimi" breed="Persian" age={2} imageSrc={persian} />
        <CatCard name="Kuna" breed="Siamese" age={3} imageSrc={siamese} />
        <CatCard name="Simba" breed="Bengal" age={1} imageSrc={bengal} />
        <CatCard name="Pummy" breed="Local" age={2} imageSrc={local1} />
        <CatCard name="Riva" breed="Local" age={1} imageSrc={local2} />
      </div>
    </>
  );
}
