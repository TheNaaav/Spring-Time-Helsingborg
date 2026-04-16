import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <div className="contact-badge">Kontakt</div>
          <h1>Kontakta Springtime</h1>
          <p>
            Välkommen att kontakta IFK Helsingborg / Springtimegruppen med frågor
            och förslag om Springtime.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Kontaktuppgifter</h2>
            <p>
              <strong>E-post:</strong>{" "}
              <a href="mailto:ifk.helsingborg@springtimeihelsingborg.se">
                ifk.helsingborg@springtimeihelsingborg.se
              </a>
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:0736837406">073-683 74 06</a>
            </p>
          </div>

          <div className="contact-card">
            <h2>Länkar</h2>
            <p>
              <a
                href="https://www.ifkhelsingborg.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IFK Helsingborgs hemsida
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/springtimeihelsingborg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Springtime på Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/springtimehbg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SpringtimeHBG på Instagram
              </a>
            </p>
          </div>

          <div className="contact-card contact-card--wide">
            <h2>Adress</h2>
            <p>
              IFK Helsingborg
              <br />
              Planteringsvägen 141B
              <br />
              252 32 Helsingborg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}