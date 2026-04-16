import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SponsorsSection from "../../components/SponsorsSection/SponsorsSection";
import races from "../../data/races";
import winners from "../../data/winners";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="page-section home-intro">
        <div className="container home-intro__inner">
          <SectionTitle title="Vi Tar Helsingborg Med Storm!" />
          <p>
            Var med och spring vårens stora motionslopp genom Helsingborg.
            En festlig dag med lopp för alla åldrar och nivåer.
          </p>
        </div>
      </section>

      <section className="page-section home-races" id="lopp">
        <div className="container">
          <SectionTitle title="Om loppen" />

          <div className="home-races__grid">
            {races.map((race) => (
              <article className="race-card" key={race.title}>
                <h3>{race.title}</h3>
                <span>{race.sub}</span>
                <p>{race.desc}</p>
              </article>
            ))}
          </div>

          <div className="home-center-link">
            <Link to="/loppen" className="home-link-btn">
              Läs mer om loppen
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section home-info">
        <div className="container">
          <SectionTitle title="Praktisk information" />

          <div className="home-info__grid">
            <div className="info-box">
              <h3>Start</h3>
              <p>Starten för samtliga lopp är på Stortorget.</p>
            </div>

            <div className="info-box">
              <h3>Nummerlappsutlämning</h3>
              <p>Fredag 8 maj och söndag 10 maj enligt arrangörens tider.</p>
            </div>

            <div className="info-box">
              <h3>Efteranmälan</h3>
              <p>Efteranmälan sker online och på plats enligt tillgänglighet.</p>
            </div>

            <div className="info-box">
              <h3>Parkering</h3>
              <p>Sundstorgsgaraget, Nicolaiskolan och Olympiaområdet.</p>
            </div>
          </div>
        </div>
      </section>
      <SponsorsSection />
    </>
  );
}