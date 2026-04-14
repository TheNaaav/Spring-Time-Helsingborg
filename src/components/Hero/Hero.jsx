import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
  <div className="hero-overlay"></div>

  <div className="hero-container">
    <div className="hero-content">
      <h1 className="hero-title">
        Springtime 2026
      </h1>

      <div className="hero-text">
        <div className="hero-date">Söndagen den 10 maj </div>
        <a href="#register" className="hero-button">
          Anmäl dig här!
        </a>
      </div>
    </div>
  </div>
</section>
  );
}