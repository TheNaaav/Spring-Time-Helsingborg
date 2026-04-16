import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const REGISTER_URL =
  "https://anmalmig.nu/anmalan/a75aff77-82a9-4b1a-9a86-46b2f6acf55b/";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="spring-header">
      <div className="container spring-header__inner">
        <Link to="/" className="spring-logo" onClick={closeMenu}>
          <span className="spring-logo__icon">🏃</span>

          <div className="spring-logo__text">
            <span className="spring-logo__title">SPRINGTIME</span>
            <span className="spring-logo__sub">HELSINGBORG</span>
          </div>
        </Link>

        <nav className={`spring-nav ${menuOpen ? "spring-nav--open" : ""}`}>

          <NavLink to="/anmalan" onClick={closeMenu} className="spring-nav__register">
            Anmälan
          </NavLink>

          <NavLink to="/loppen" onClick={closeMenu}>
            Loppen
          </NavLink>

          <NavLink to="/banan" onClick={closeMenu}>
            Banan
          </NavLink>
          
          <NavLink to="/deltagarinfo" onClick={closeMenu}>
            Deltagarinfo
          </NavLink>

          <NavLink to="/resultat" onClick={closeMenu}>
            Resultat
          </NavLink>

          <NavLink to="/kontakt" onClick={closeMenu}>
            Kontakt
          </NavLink>
        </nav>

        <button
          className={`spring-menu-btn ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}