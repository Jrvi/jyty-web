import Layout from "../components/Layout";

const events = [
  { id: 1, date: new Date("2025-04-29T17:00:00"), title: "Jytyn Vapu Ivetys" },
];

export default function Home() {
  const now = new Date();

  const upcomingEvents = events.filter(event => event.date > now);

  return (
    <Layout>
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">Jyväskylän teekkariyhdistys</h1>
          <p className="home-highlight">
            Huom! Sivun teema on räikeä vapun kunniaksi. Iloista vappua! (Oikeat värit työnalla...)
          </p>
          <p className="home-paragraph">
            Tervetuloa Jyväskylän Teekkariyhdistykseen! Olemme osa Jyväskylän
            yliopiston opiskelijayhteisöä, joka tarjoaa tukea ja mahdollisuuksia
            kaikille teknilliselle alalle suuntautuville opiskelijoille.
          </p>
          <h2 className="home-subtitle">Tulevat tapahtumat</h2>
          <ul className="home-list">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <li key={event.id}>
                  {event.date.toLocaleDateString("fi-FI")} klo{" "}
                  {event.date.toLocaleTimeString("fi-FI", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  - {event.title}
                </li>
              ))
            ) : (
              <li>Ei tulevia tapahtumia.</li>
            )}
          </ul>
        </div>
        <div className="home-logo">
          <img src="/logo.png" alt="Jyty Logo" />
        </div>
      </div>
    </Layout>
  );
}