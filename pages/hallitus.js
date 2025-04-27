import Layout from "../components/Layout";

const members = [
  {
    name: "Juho Järvi",
    title: "Puheenjohtaja",
    image: "hallitus/juho.jpg",
  },
  {
    name: "Eemil Hukkanen",
    title: "Varapuheenjohtaja",
    image: "hallitus/eemil.jpg",
  },
  {
    name: "Ilmo Kurki",
    title: "Sihteeri",
    image: "hallitus/ilmo.jpg",
  },
  {
    name: "Nuutti Rantanen",
    title: "Rahastonhoitaja",
    image: "hallitus/nuutti.jpg",
  },
  {
    name: "Kasper Pelkonen",
    title: "Kiltavastaava",
    image: "hallitus/kassu.jpg",
  },
  {
    name: "Lassi Laitinen",
    title: "Teekkarikulttuurivastaava",
    image: "hallitus/lassi.jpg",
  },
  {
    name: "Atte Heikkinen",
    title: "Viestintävastaava",
    image: "hallitus/atte.jpg",
  },
  {
    name: "Juho Kallijärvi",
    title: "Mediavastaava",
    image: "hallitus_placeholder.png",
  },
  {
    name: "Theodore Veistos",
    title: "Somevastaava",
    image: "hallitus_placeholder.png",
  },
];

export default function Hallitus() {
  return (
    <Layout>
      <div>
        <h1 className="hallitus-title">Hallitus</h1>
        <div className="hallitus-container">
          {members.map((member) => (
            <div key={member.name} className="hallitus-card">
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
        <div className="hallitus-contact">
          <h2>Ota yhteyttä</h2>
          <p>Sähköposti: <a href="mailto:jyvaskylanteekkarit@gmail.com">jyvaskylanteekkarit@gmail.com </a></p>
        </div>
      </div>
    </Layout>
  );
}