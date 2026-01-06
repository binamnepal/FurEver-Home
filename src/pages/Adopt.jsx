import React, { useState } from "react";
import logo from "../assets/Imges/background/logo.jpeg";
import todo from "../assets/Imges/background/todo.jpeg";
import name from "../assets/Imges/background/name.jpeg";
import dogtip from "../assets/Imges/background/Dogs adoptation.jpeg";
import live from "../assets/Imges/background/live.jpeg";
import homepet from "../assets/Imges/background/thingstodo.jpeg";
import "../Css file/Adopt.css";

export default function Adopt() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const articleData = [
    {
      id: 0,
      title: "Things to Consider Before You Adopt",
      img: todo,
      points: [
        "Assess your lifestyle and time commitment.",
        "Consider the financial responsibilities.",
        "Research breeds and their needs."
      ]
    },
    {
      id: 1,
      title: "Cool Dog Names",
      img: name,
      points: [
        "Trending: Bella, Nova, Luna, Max, and Charlie.",
        "Choose names that are easy for pets to recognize.",
        "Avoid names that sound like common commands."
      ]
    },
    {
      id: 2,
      title: "Pet Adoption Tips",
      img: dogtip,
      points: [
        "Start with patience and a consistent routine.",
        "Prepare your home before the pet arrives.",
        "Schedule a vet visit within the first week."
      ]
    }
  ];

  return (
    <div className="adopt-page-wrapper">
      {/* Navbar Section */}
      <nav className="navbar-adopt">
        <div className="nav-inner">
          <div className="nav-logo-grp">
            <img src={logo} alt="FurEver Home" className="logo" />
            <span className="site-name">FurEver Home</span>
          </div>
          <div className="nav-links-grp">
            <a href="/">Home</a>
            <a href="/articles">Articles</a>
            <a href="/contact" className="nav-cta">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="adopt-hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <span className="badge">Pet Adoption Articles</span>
          <h1>Find Your Perfect Companion</h1>
          <p>Thousands of loving pets are waiting for a forever home. Start your journey of unconditional love today.</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="content-container">
        <section className="intro-card">
          <p>
            In simple terms, pet adoption is the process of taking permanent responsibility for a pet from an animal shelter or rescue organization. It is a rewarding journey that changes lives—both yours and theirs.
          </p>
        </section>

        <section className="article-section">
          <h2 className="section-heading">01. Finding Your Pet</h2>
          
          <div className="article-grid">
            {articleData.map((article) => (
              <div 
                key={article.id} 
                className={`article-card ${openIndex === article.id ? 'active' : ''}`} 
                onClick={() => toggle(article.id)}
              >
                <div className="card-img-box">
                  <img src={article.img} alt={article.title} />
                  <div className="img-overlay">Click to Read More</div>
                </div>
                
                <div className="card-body">
                  <span className="click-hint">Click to read more</span>
                  <h3>{article.title}</h3>
                  
                  {/* The Expanded List Style */}
                  <div className="expandable-list">
                    {article.points.map((point, idx) => (
                      <div className="list-item" key={idx}>
                        <span className="paw-icon">🐾</span>
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}