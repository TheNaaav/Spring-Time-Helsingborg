import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="spring-header">
      <div className="spring-header__inner">
        <a href="/" className="spring-logo" onClick={closeMenu}>
          <div className="spring-logo__icon">🏃</div>
          <div className="spring-logo__text">
            <span className="spring-logo__title">SPRINGTIME</span>
            <span className="spring-logo__sub">HELSINGBORG</span>
          </div>
        </a>

        <nav className={`spring-nav ${menuOpen ? "spring-nav--open" : ""}`}>
          <a href="#Register" onClick={closeMenu}>Anmäla</a>
          <a href="#Resultat" onClick={closeMenu}>Resultat</a>
          <a href="#contact" onClick={closeMenu}>Kontakt</a>
        </nav>

        <button
          className={`spring-menu-btn ${menuOpen ? "is-open" : ""}`}
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}