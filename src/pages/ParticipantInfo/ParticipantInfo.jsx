import "./ParticipantInfo.css";
import participantSectionsData from "../../data/participantData";

export default function ParticipantInfo() {
  return (
    <section className="participant-page">
      <div className="container">
        <div className="participant-hero">
          <div className="participant-badge">Deltagarinformation</div>
          <h1>Allt du behöver veta inför loppet</h1>
          <p>
            Här hittar du viktig information om start, publik, nummerlappsutlämning,
            efteranmälan, chip, resultat, parkering och annat som är bra att känna till
            innan Springtime 2026.
          </p>
        </div>

        <div className="participant-intro-card">
          <p>
            IFK Helsingborg, Helsingborgs Dagblad, Helsingborgs Citysamverkan och
            Helsingborgs stad hälsar dig välkommen till Helsingborgs stadslopp Springtime.
            Sista anmälningsdag är 19 april 2026. Därefter finns möjlighet att, i mån av plats,
            efteranmäla sig.
          </p>
        </div>

        <div className="participant-grid">
          {participantSectionsData.map((section) => (
            <article className="participant-card" key={section.title}>
              <h2>{section.title}</h2>

              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.text &&
                section.text.map((row) => <p key={row}>{row}</p>)}
            </article>
          ))}
        </div>

        <div className="participant-newsletter">
          <h3>Nyhetsbrev</h3>
          <p>Vill du få uppdateringar inför loppet kan du anmäla dig till nyhetsbrevet.</p>
        </div>
      </div>
    </section>
  );
}