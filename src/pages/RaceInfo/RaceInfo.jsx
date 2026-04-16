import { Link } from "react-router-dom";
import "./RaceInfo.css";

export default function RaceInfo() {
  return (
    <section className="race-info-page">
      <div className="container">
        <div className="race-info-hero">
          <div className="race-info-badge">Om loppen</div>

          <h1>Springtime har något för alla</h1>

          <p className="race-info-lead">
            På Springtime finns flera olika lopp beroende på hur långt man vill
            springa. Oavsett om du vill springa klassikern, ett kortare lopp,
            delta som barn, i lag eller i ett mer tillgängligt format finns det
            ett alternativ som passar.
          </p>
        </div>

        <div className="race-info-grid">
          <article className="race-box">
            <h2>10 km</h2>
            <p>
              Klassikern 10 km är Springtimes ryggrad. Distansen har funnits
              sedan 1981 och är den som lockar flest löpare.
            </p>
          </article>

          <article className="race-box">
            <h2>5 km</h2>
            <p>
              Det kortare och lite mer intensiva loppet på 5 km passar den
              öppna klassen och dig som vill springa en snabbare distans.
            </p>
          </article>

          <article className="race-box">
            <h2>HD&apos;s MiniSpringtime</h2>
            <p>
              Det mindre loppet är HD&apos;s MiniSpringtime, ett barnlopp för barn
              födda 2016 till och med 2020.
            </p>
          </article>

          <article className="race-box">
            <h2>Alla Kan Springa</h2>
            <p>
              Alla Kan Springa använder samma bana som HD&apos;s MiniSpringtime och
              är ett lopp för dig med rörelsehinder och/eller speciella behov.
            </p>
            <p className="race-box-note">
              Samma bana som MiniSpringtime, men för en annan målgrupp.
            </p>
          </article>

          <article className="race-box race-box--wide">
            <h2>Lagtävling 2026</h2>
            <p>
              Under Springtime 2026 kan ni åter anmäla er som lag. Vi erbjuder
              en lagtävling där herrar och damer deltar på lika villkor eftersom
              tiderna räknas om i slutresultatet.
            </p>
            <p>
              Tillsammans tar ni er an 5 eller 10 km och varje deltagare bidrar
              till lagets slutresultat.
            </p>
            <p>
              Både 5 km och 10 km går att springa som lag, vilket gör dagen ännu
              roligare för kompisar, kollegor och föreningar.
            </p>
            <Link to="/anmalan" className="race-inline-link">
              Läs mer om laganmälan →
            </Link>
          </article>
        </div>

        <div className="race-info-bottom">
          <div className="race-info-highlight">
            <h3>Springtime är ett av Skånes äldsta lopp</h3>
            <p>
              Ett klassiskt motionslopp i Helsingborg med lång tradition,
              gemenskap och löpglädje.
            </p>
          </div>

          <div className="race-info-actions">
            <Link to="/anmalan" className="race-info-btn primary">
              Gå till anmälan
            </Link>

            <Link to="/banan" className="race-info-btn secondary">
              Se banan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}