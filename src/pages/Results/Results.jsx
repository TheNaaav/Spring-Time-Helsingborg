import winners from "../../data/winners";
import "./Results.css";

const RESULT_LINK =
  "https://www.marathon.se/racetimer";

export default function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="results-hero">
        <span className="badge">Resultat</span>
        <h1>De senaste vinnarna</h1>
            <p className="results-sub">
                Det här är de snabbaste löparna från Springtime 👇  
                <br />
                <strong>Kanske är det du nästa år?</strong> 🏃‍♂️🔥
            </p>
            <a href="/registration" className="results-join">
                Anmäl dig nu →
            </a>
        </div>

        <div className="results-list">
          {winners.map((item) => (
            <div className="result-row" key={item.year}>
              <div className="result-year">{item.year}</div>

              <div className="result-block">
                <span className="result-label">Herrar</span>
                <h3>{item.men.name}</h3>
                <p>{item.men.club}</p>
                <span className="time">{item.men.time}</span>
              </div>

              <div className="result-block">
                <span className="result-label">Damer</span>
                <h3>{item.women.name}</h3>
                <p>{item.women.club}</p>
                <span className="time">{item.women.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="results-cta">
          <a href={RESULT_LINK} target="_blank" rel="noreferrer">
            Se fullständig resultatlista
          </a>
        </div>
      </div>
    </section>
  );
}