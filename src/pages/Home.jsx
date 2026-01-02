import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Imges/background/logo.jpeg";
import heroImg from "../assets/Imges/background/pet background.jpg";
import "../Css file/Homepage.css";

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
        <p>&copy; 2025 FurEver Home. All rights reserved.</p>
      </footer>
    </div>
  );
}