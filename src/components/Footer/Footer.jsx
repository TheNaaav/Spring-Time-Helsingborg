import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-top">
          <h3>🏃 SPRINGTIME HELSINGBORG</h3>

          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Om</h4>
            <p>Springtime är Helsingborgs klassiska stadslopp.</p>
          </div>

          <div>
            <h4>Länkar</h4>
            <Link to="/loppen">Loppen</Link>
            <Link to="/deltagarinfo">Deltagarinfo</Link>
            <Link to="/banan">Banan</Link>
            <Link to="/resultat">Resultat</Link>
          </div>

          <div>
            <h4>Kontakt</h4>
            <p>IFK Helsingborg</p>
            <p>ifk.helsingborg@springtimeihelsingborg.se</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Springtime Helsingborg
        </div>
      </div>
    </footer>
  );
}