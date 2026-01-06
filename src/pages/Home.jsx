import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Imges/background/logo.jpeg";
import heroImg from "../assets/Imges/background/pet background.jpg";
import "../Css file/Homepage.css";
import Max from "../assets/Imges/dogs/german-shepherd.jpeg"
import Pummy from "../assets/Imges/cat/local-cat-1.jpg"
import Buddy from "../assets/Imges/dogs/Labrador.jpg"
export default function HomePage() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="homepage-container">

      <header className="navbar" ref={navRef}>
        <div className="nav-inner">

          <div className="nav-brand-section">
            <img src={logo} alt="FurEver Home Logo" className="logo" />
          </div>

          <nav className="nav-links">
            <div
              className={`adopt-dropdown ${openDropdown === "adopt" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("adopt")}
              onClick={() => toggleDropdown("adopt")}
            >
              <button className="dropbtn">Adopt or Get Involved</button>
              <div className="dropdown-content">
                <Link to="/about">About Us</Link>
                <Link to="/adopt">Adopting Pets</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div
              className={`adopt-dropdown ${openDropdown === "dogs" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("dogs")}
              onClick={() => toggleDropdown("dogs")}
            >
              <button className="dropbtn">Dogs & Puppies</button>
              <div className="dropdown-content">
                <Link to="/adopt-dog">Dog Adoption</Link>
              </div>
            </div>

            <div
              className={`adopt-dropdown ${openDropdown === "cats" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("cats")}
              onClick={() => toggleDropdown("cats")}
            >
              <button className="dropbtn">Cats & Kittens</button>
              <div className="dropdown-content">
                <Link to="/adopt-cat">Cat Adoption</Link>
              </div>
            </div>

            <div
              className={`adopt-dropdown ${openDropdown === "otherpets" ? "open" : ""}`}
              onMouseEnter={() => setOpenDropdown("otherpets")}
              onClick={() => toggleDropdown("otherpets")}
            >
              <button className="dropbtn">Other</button>
              <div className="dropdown-content">
                <Link to="/adopt-others">Other Pets</Link>
                <Link to="/animal-health">Animal Health</Link>
              </div>
            </div>
          </nav>

          <div className="nav-auth-section">
            <Link to="/login" className="login-nav-btn">Login</Link>
          </div>

        </div>
      </header>

      <section className="hero">
        <img src={heroImg} alt="FurEver Home" className="hero-img" />
        <div className="hero-content fade-in">
          <h2>Welcome to FurEver Home</h2>
          <p>Find your perfect pet today</p>
          <div className="hero-actions">
            <Link to="/adopt" className="hero-btn">Adopt Now</Link>
            <Link to="/about" className="hero-btn outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="pet-suggestion-section">
        <h2 className="section-title">Pets Looking for a Home</h2>

        <div className="pet-card-grid">
          <div className="pet-card">
            <img src={Buddy} alt="Buddy the Dog" />
            <div className="pet-info">
              <h3>Khairey</h3>
              <p>Age: 2 years</p>
              <p>Friendly & playful dog</p>
              <Link to="/adopt-dog" className="pet-btn">Adopt Me</Link>
            </div>
          </div>

          <div className="pet-card">
            <img src={Pummy} alt="Luna the Cat" />
            <div className="pet-info">
              <h3>Pummy</h3>
              <p>Age: 1 year</p>
              <p>Calm & loving cat</p>
              <Link to="/adopt-cat" className="pet-btn">Adopt Me</Link>
            </div>
          </div>

          <div className="pet-card">
            <img src={Max} alt="Max the Puppy" />
            <div className="pet-info">
              <h3>Max</h3>
              <p>Age: 6 months</p>
              <p>Energetic puppy</p>
              <Link to="/adopt-dog" className="pet-btn">Adopt Me</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <h2>Want to Help?</h2>
          <div className="cta-text-bar">
            <p>Volunteer, donate, or adopt a pet to make a difference today!</p>
          </div>
          <Link to="/donate" className="cta-btn">Donate</Link>
        </div>
      </section>
<footer className="footer">
  <div className="footer-inner">
    {/* Contact & Social */}
    <div className="footer-section contact">
      <h3>Connect With Us</h3>
      <div className="social">
        <a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 FurEver Home. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}