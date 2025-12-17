import React from "react";
import "../Css file/Contactus.css"
import { Link } from "react-router-dom";
import Home from "./Home";
import "../Css file/Body.css";
export default function ContactUs() {
  return (
    <div>
    
      <Link to="/" className="back-link-contact">
        ← Back
      </Link>

      <div className="container">
        <h1>Contact FurEver Home</h1>
        <p className="intro-text">
          If you have any questions, suggestions, or would like to get in touch
          with us, please reach out through the following methods or send us a
          message directly.
        </p>


        <div className="card">
          <h2>Contact Information</h2>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@fureverhome.org">info@fureverhome.org</a>
            </li>
            <li>
              Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>Address: Kathmandu, Sifal, Nepal</li>
          </ul>
        </div>

        {/* Office Hours */}
        <div className="card">
          <h2>Office Hours</h2>
          <ul>
            <li>Sunday - Thursday: 9:00 AM to 6:00 PM</li>
            <li>Friday: 10:00 AM to 4:00 PM</li>
            <li>Saturday: Closed</li>
          </ul>
        </div>

        {/* Form */}
        <div className="card">
          <h2>Send Us a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" required />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Social Links */}
        <div className="card">
          <h2>Follow Us</h2>
          <ul className="social">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="card">
  <div className="card map-container">
  <h2>Our Location</h2>
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240404984534!2d85.33758237535564!3d27.70986757618146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197669651631%3A0xc6e987f6312480!2sSifal%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: "10px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  );
}
