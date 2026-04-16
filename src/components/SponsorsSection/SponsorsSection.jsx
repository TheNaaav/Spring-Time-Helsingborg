import "./SponsorsSection.css";

const sponsors = [
  "HD",
  "Helsingborg Stad",
  "Rikshem",
  "Aktiverum",
  "Löplabbet",
  "Re:hydrate",
  "Team Rynkeby Helsingborg",
  "Ramlösa",
  "Bildeve",
  "HBG City",
];

export default function SponsorsSection() {
  return (
    <section className="sponsors">
      <div className="container">
        <div className="sponsors-head">
          <span className="badge">Sponsorer</span>
          <h2>Våra samarbetspartners</h2>
          <p>
            Tillsammans med våra partners skapar vi Springtime Helsingborg
          </p>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div className="sponsor-item" key={sponsor}>
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}