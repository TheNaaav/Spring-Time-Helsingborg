import "./Hero.css";

const REGISTER_URL =
  "https://anmalmig.nu/anmalan/a75aff77-82a9-4b1a-9a86-46b2f6acf55b/";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            SPRINGTIME
            <br />
            <span>HELSINGBORG 2026</span>
          </h1>

          <p className="hero-subtext">
            Känn pulsen, energin och gemenskapen i Helsingborgs stora löparfest.
          </p>

          <div className="hero-text">
            <div className="hero-date">10 MAJ</div>

            <a href="/anmalan" className="hero-button">
              Jag vill vara med
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}