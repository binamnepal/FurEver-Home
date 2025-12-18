import React from "react";
import { Link } from "react-router-dom";
import "../Css file/Aboutus.css";
import "../Css file/Body.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <Link to="/" className="back-link-about">← Back</Link>

        <h1>About FurEver Home</h1>
        <p>
          FurEver Home is a dedicated pet-adoption platform committed to creating meaningful
          connections between animals in need and individuals or families seeking lifelong
          companionship. Founded on the principles of compassion, responsibility, and community
          service, FurEver Home strives to provide every adoptable animal with the opportunity
          to experience safety, comfort, and unconditional love.
        </p>

        <p>
          Our organization collaborates closely with trusted animal shelters, rescue centers,
          and foster networks to ensure that each pet featured on our platform has been properly
          cared for and evaluated. Many of these animals come from challenging backgrounds—
          abandonment, neglect, or unforeseen circumstances—and our goal is to give them a
          second chance through responsible and ethical adoption practices.
        </p>

        <p>
          At FurEver Home, we emphasize transparency and quality care. Every adoption listing
          includes accurate information about a pet's health, behavior, and special needs. Our
          team works diligently to support adopters throughout the entire process—from initial
          inquiry to post-adoption guidance—ensuring that both the pet and the adopter are fully
          prepared for a successful transition.
        </p>

        <p>
          Beyond facilitating adoptions, we are committed to promoting awareness about animal
          welfare. We regularly share educational resources on responsible pet ownership, proper
          nutrition, training, and preventive healthcare. Our aim is not only to place pets in
          new homes but also to foster a community that values kindness, empathy, and long-term
          commitment.
        </p>

        <p>
          FurEver Home represents more than a service; it is a mission. By connecting deserving
          animals with compassionate individuals, we hope to create lasting bonds and transform
          lives—one adoption at a time. Together, we can work toward a future where every pet
          finds a safe, loving, and forever home.
        </p>
      </div>
    </div>
  );
}