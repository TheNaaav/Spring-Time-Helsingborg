import "./Registration.css";

const REGISTER_URL =
  "https://anmalmig.nu/anmalan/a75aff77-82a9-4b1a-9a86-46b2f6acf55b/";

const registrationItems = [
  {
    title: "5 km",
    earlyPrice: "325 kr",
    regularPrice: "395 kr",
    latePrice: "495 kr",
    note: "Efteranmälan på hemsidan tom 3/5",
  },
  {
    title: "10 km",
    earlyPrice: "425 kr",
    regularPrice: "495 kr",
    latePrice: "595 kr",
    note: "Efteranmälan på hemsidan tom 3/5",
  },
  {
    title: "HD's MiniSpringtime 1 km",
    earlyPrice: "150 kr",
    regularPrice: "175 kr",
    latePrice: "200 kr",
    note: "Efteranmälan på hemsidan tom 3/5",
  },
  {
    title: "Lagtävling 5 km",
    earlyPrice: "1200 kr",
    regularPrice: "1500 kr",
    latePrice: "-",
    note: "Ingen efteranmälan",
  },
  {
    title: "Lagtävling 10 km",
    earlyPrice: "1600 kr",
    regularPrice: "1900 kr",
    latePrice: "-",
    note: "Ingen efteranmälan",
  },
];

export default function Registration() {
  return (
    <section className="page-section registration-page">
      <div className="container">
        <div className="registration-hero">
          <h1>Anmälan för Springtime 2026</h1>
          <p>
            Här hittar du priser, sista anmälningsdag, efteranmälan och viktig
            information innan du går vidare till själva anmälan.
          </p>
        </div>

        <div className="registration-list">
          {registrationItems.map((item) => (
            <article className="registration-card" key={item.title}>
              <div className="registration-card__head">
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </div>

              <div className="registration-prices">
                <div className="price-box">
                  <span>Anmälningsavgift tom 31/1</span>
                  <strong>{item.earlyPrice}</strong>
                </div>

                <div className="price-box">
                  <span>Anmälningsavgift tom 19/4</span>
                  <strong>{item.regularPrice}</strong>
                </div>

                <div className="price-box">
                  <span>Efteranmälan</span>
                  <strong>{item.latePrice}</strong>
                </div>
              </div>

              <div className="registration-card__action">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="registration-btn"
                >
                  Anmälan
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="registration-info">
          <h3>Viktig information</h3>

          <div className="registration-info__grid">
            <div className="info-panel">
              <h4>Anmälan</h4>
              <p>
                Sista ordinarie anmälningsdag är den 19/4. När detta datum har
                passerat kan man fortfarande anmäla sig mot tillkommande
                efteranmälningsavgift.
              </p>
            </div>

            <div className="info-panel">
              <h4>Återbud</h4>
              <p>
                Vid anmälan finns möjlighet att teckna en försäkring. Kontakta
                arrangören vid återbud enligt villkoren för anmälan.
              </p>
            </div>

            <div className="info-panel">
              <h4>Vid förhinder</h4>
              <p>
                Startnummer kan i vissa fall överlåtas till annan löpare.
                Kontakta arrangören för aktuell information.
              </p>
            </div>

            <div className="info-panel">
              <h4>Det här ingår</h4>
              <p>
                Nummerlapp, medalj samt vatten och frukt efter loppet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}