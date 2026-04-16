import { Link } from "react-router-dom";
import "./Course.css";

export default function Course() {
  return (
    <section className="course-page">
      <div className="container">
        <div className="course-hero">
          <div className="course-badge">Banan</div>
          <h1>Springtimebanan 2026</h1>
          <p>
            Här ser du sträckningarna för 5 km, 10 km samt 1 km-loppet för
            MiniSpringtime och Alla Kan Springa.
          </p>
        </div>

        {/* 5 & 10 KM */}
        <div className="course-layout">
          <div className="course-info">
            <div className="course-card">
              <h2>5 km & 10 km</h2>
              <p>
                Springtimebanan drogs om inför loppet 2025 och kommer 2026 att
                vara densamma.
              </p>
            </div>

            <div className="course-card">
              <h2>Ändringar</h2>
              <ul>
                <li>Start och mål är nu på Stortorget</li>
                <li>Hela Pålsjöbacken springs utan avstickare</li>
                <li>F M Franzens gata springas hela vägen upp</li>
                <li>Ny sträckning via Kärngränden och Nedre Långvinkelsgatan</li>
              </ul>
            </div>

            <div className="course-card course-note">
              <p>
                Både 5- och 10 km banorna är kontrollmätta
                av Svensk friidrotts banmätare Per Månsson.
              </p>
            </div>
          </div>

          <div className="course-map-wrap">
            <img
              src="/images/karta.avif"
              alt="5 km och 10 km bana"
              className="course-map"
            />
          </div>
        </div>

        {/* 1 KM */}
        <div className="course-layout course-layout--reverse">
          <div className="course-map-wrap">
            <img
              src="/images/minikarta.avif"
              alt="1 km bana"
              className="course-map"
            />
          </div>

          <div className="course-info">
            <div className="course-card">
              <h2>1 km – MiniSpringtime & Alla Kan Springa</h2>
              <p>
                MiniSpringtime och Alla Kan Springa använder samma 1 km-bana i
                centrala Helsingborg.
              </p>
            </div>

            <div className="course-card">
              <h2>För vem?</h2>
              <ul>
                <li>MiniSpringtime: barn födda 2016–2020</li>
                <li>Alla Kan Springa: för deltagare med särskilda behov</li>
                <li>Öppet för alla nivåer</li>
              </ul>
            </div>

            <div className="course-card course-note">
              <p>
                En kort, trygg och publikvänlig bana som passar alla deltagare.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="course-actions">
          <Link to="/anmalan" className="course-btn primary">
            Anmäl dig nu
          </Link>

          <Link to="/loppen" className="course-btn secondary">
            Läs om loppen
          </Link>
        </div>
      </div>
    </section>
  );
}