  import React, { useState } from "react";
  import logo from "../assets/Imges/background/logo.jpeg";
  import todo from "../assets/Imges/background/todo.jpeg";
  import name from "../assets/Imges/background/name.jpeg";
  import dogtip from "../assets/Imges/background/Dogs adoptation.jpeg";
  import live from "../assets/Imges/background/live.jpeg";
  import homepet from "../assets/Imges/background/thingstodo.jpeg";
  import "../Css file/Adopt.css";
  import "../Css file/Body.css";

  export default function Adopt() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
      setOpenIndex(openIndex === i ? null : i);
    };

    return (
      <div className="container">
  
        <div className="navbar-adopt">
          <div className="left-group">
            <img src={logo} alt="FurEver Home Logo" className="logo" />
            <a href="/adopt-dog"><i className="find-dog"></i> Find a Dog</a>
            <a href="/adopt-cat"><i className="find-cat"></i> Find a Cat</a>
            <a href="adopt-others"><i className="Other"></i> Other Pets</a>
          </div>

          <div className="right-group">
            <a href="/">Home</a>
            <a href="https://wvs.org.uk/news/10-reasons-why-you-should-adopt-dont-shop/">Articles</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

      
        <div className="left">
          <h1>Pet Adoption Articles</h1>

          <p>
            In simple terms, pet adoption is the process of taking permanent
            responsibility for a pet from an animal shelter or rescue organization...
          </p>

    <h2>Finding a pet</h2>
    <div className="main-content">
          <div className="card-row">
            
            <div className="card" onClick={() => toggle(0)}>
              <img src={todo} alt="thingstodo" />
              <h3>Things to Consider Before You Adopt</h3>

              {openIndex === 0 && (
                <div className="drop-text">
                  <ul>
                    <li>Assess your lifestyle and time commitment.</li>
                    <li>Consider the financial responsibilities.</li>
                    <li>Research breeds and their needs.</li>
                    <li>Check if your home is pet-friendly.</li>
                  </ul>
                </div>
              )}
            </div>

            
            <div className="card" onClick={() => toggle(1)}>
              <img src={name} alt="name" />
              <h3>Cool Dog Names</h3>

              {openIndex === 1 && (
                <div className="drop-text">
                  <ul>
                    <li>Timmy</li>
                    <li>Bella</li>
                    <li>Bhote</li>
                    <li>Nova</li>
                    <li>Shray</li>
                  </ul>
                </div>
              )}
            </div>
          </div> 

        </div>
          <h2>Your New Dog</h2>

          <div className="card-row">
            {/* CARD 3 */}
            <div className="card" onClick={() => toggle(2)}>
              <img src={dogtip} alt="adoption tips" />
              <h3>Pet Adoption Tips</h3>

              {openIndex === 2 && (
                <p className="drop-text">
                  Start with patience, routine training, and give your pet time to adjust.
                </p>
              )}
            </div>

          
            <div className="card" onClick={() => toggle(3)}>
              <img src={live} alt="live" />
              <h3>Living with Newly Adopted Pet</h3>

              {openIndex === 3 && (
                <p className="drop-text">
                  Introduce them slowly and give each pet its own space.
                </p>
              )}
            </div>

            
            <div className="card" onClick={() => toggle(4)}>
              <img src={homepet} alt="home suitable" />
              <h3>How to Make Your Home Pet-Friendly</h3>

              {openIndex === 4 && (
                <p className="drop-text">
                  Remove hazards, secure wires, and keep harmful items away.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

<section className="adopt-hero">
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Adopt a Pet, Save a Life</h1>
    <p>
      Thousands of loving pets are waiting for a forever home.
      Start your adoption journey today.
    </p>

    <div className="hero-buttons">
      <a href="/adopt-dog" className="hero-btn">Adopt a Dog</a>
      <a href="/adopt-cat" className="hero-btn outline">Adopt a Cat</a>
    </div>
  </div>
</section>
