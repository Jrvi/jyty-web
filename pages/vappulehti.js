import Layout from "../components/Layout";

const articles = [
  {
    id: 1,
    type: "article",
    title: "Rento ruusu",
    content: `
      <p>Kaikki alkoi rennosta Ruususta!</p>
      <p>Se ilta Kuokkalasssa oli juuri sellainen kuin pitääkin: aivan liian hämärä, jopa hieman myrskyinen, ja liian paljon straffia mukissa. Näin ainakin me sen muistamme. Siellä pienessä saunallisessa yksiössä teekkarihenkiset vanhukset kokoontuivat miettimään Jyväskylän teekkarien tulevaisuutta. Uudet teknilliset alat näkyivät jo horisontissa, eikä varmuutta kuka vie teekkari sanomaa eteenpäin. Näin kolme vähemmän uljasta sanansaattajaa päätyivät pohtimaan tulevaa rennon RUUSUN & saunan äärellä. Tästä JYTY sai alkunsa.</p>
      <p>Kortit pyörivät, lasit tyhjenivät ja vähitellen boolin inspiroimana alkoi syntyä ideoita. Niistä suurin tai ainakin sillä hetkellä kirkkaimmalta tuntunut ajatus oli vappulehdestä. Sellaisesta, joka ei olisi pelkkä kasa kömpelöjä vitsejä ja jollain Paintilla tehtyjä sarjakuvia (vaikka niitäkin tulisi). Lehden piti jytistä. Sen piti olla sellainen, josta mummokin ilahtuisi. Yhteinen motivaatio oli tuottaa kehnoa journalismia ja syventyä teekkarien salaisuuksien kammioon. Myöhemmin ajatus kuitenkin syveni </p>
      <p>Ensin tuli nimi, sitten kolme vanhusta, jotka vannottiin vastuuhenkilöiksi ennen kuin he ehtivät kunnolla tajuta mistä on kyse. Sitten tapahtui Telegram-ryhmän, hemmo piirsi kannen, ja joku kolmas keksi yhdistykselle virallisen nimen aikana, jolloin virallisuus oli hyvin suhteellinen käsite.</p>
      <p>Vaikka tarina alkoi hämyisestä Kuokkalasta ja kädenlämpöisestä boolista, se elää yhä jokaisessa huonossa ideassa, joka muuttuu legendaksi.</p>
    `,
    image: "rentoruusu.jpg",
    author: "Eemil Hukkanen ja Kasper Pelkonen",
  },
  {
    id: 2,
    type: "quote",
    content: "“Mikä vitun setämies kerho”",
    author: "Tuntematon",
  },
  {
    id: 3,
    type: "article",
    title: "Perustamiskokous",
    content: `
      <p>Siitä illasta Opinkivensaunassa tuli yhtä lailla legendaarinen kuin Kuokkalankin hämärä boolisessio. Ennen Nuutti Rantasen valmistujaisjuhlia pakkasimme mukaamme intoa ja uteliaisuutta, ja suuntasimme Jyväskylän kuuluisimpaan saunaan.</p>
      <p>Opinkiven pöydän ääreen oli kutsuttu kaikki aiheen äärelle eksyneet, eikä porukka pettänyt. Säännöt, jotka oli hiottu workshopien pöhinässä puhtaaksi kuin uunituore diplomi-insinöörityö, hyväksyttiin viimeisellä silauksella.</p>
      <p>Seuraavaksi valokuvattiin porukka, joka kantaisi vastuun JYTYN tulevaisuudesta: puheenjohtaja Juho Järvi, varapuheenjohtaja Eemil Hukkanen, sihteeri Ilmo Kurki ja rahastonhoitaja, itse juhlien kunniavieras, Nuutti Rantanen. Hallituksen jäseniksi setämies kerhoon valittiin Lassi Laitinen, Kasper Pelkonen, Theodore Veistos, Atte Heikkinen ja Juho Kallijärvi.</p>
      <p>Kun yhdistys oli virallisesti perustettu ja maljat kohotettu kuohuviinille, siirryimme höyryävään saunaan. Kiuaskivien loimutessa kerroimme tarinoita Kuokkalasta, booli-illasta ja siitä, miten pienestä hikisestä yksiöstä lähti liikkeelle idea, joka nyt sai muotonsa Opinkivensaunan lauteilla. Ja niin, kun lasit vinkuen kilisivät, tiedettiin. Tässä porukassa on ainesta vielä moneksi legendaksi. JYTY oli syntynyt.</p>
    `,
    image: "perustamis.jpg",
    author: "Juho Järvi",
  },
  {
    id: 4,
    type: "article",
    title: "Kansainvälisen Teekkarin Sanat",
    content: `
      <p>Opiskelijavaihto on todella kannattavaa sekä antoisaa teekkarille. Pääset oppimaan vaihtomaasi kieltä sekä kehittämään omia vuorovaikutustaitojasi monikulttuurisessa ympäristössä. Mainittakoot vielä, että kun kerran pääsee irti arjen rutiineista ja suomalaisten harmaista kampuskäytävistä, alkaa elämä maistua aivan uudelta… usein myös hieman oluelta.</p>
      <p>Vaihdossa pääset oppimaan, miten käydään kaupassa ilman että ymmärrät sanaakaan pakkausselosteista. Kielitaidon kehittymistä voikin mitata sillä, että osaa tilata paikallisessa baarissa juuri sen oluen, jossa oli se hieno etiketti, eikä se vahingossa 12- prosenttinen “pikkupullo”. Jokainen moka, eksyminen ja sattumus kääntyy lopulta tarinaksi, jota kerrotaan vielä vuosien päästä sitsipöydässä.</p>
      <p>Vaihdosta sinulle jää käteen enemmän kuin kasa jääkaappimagneetteja ja epämääräinen kansainvälinen ruokakokoelma. Se antaa itseluottamusta, avartaa maailmankuvaa ja muistuttaa siitä, että tuntematonkin voi olla ihan hemmetin siistiä. Suosittelen – ja niin suosittelee myös se minä, joka ei enää pelkää puhua englantia edes silloin, kun on krapulassa. Lopuksi haluan vielä jakaa hiukan maisemakuvia, toivottavasti ne saavat sinunkin sisäisen vaihtaripersoonasi heräämään.</p>
      <p>Cheers, prost,– tai kuten täälläpäin sanotaan: more beer, less fear and in the end game is game.</p>
      <p>Haluan toivottaa oikein hyvää ja viihtyisää vappua juursi sinulle.</p>
      <p>- Terveisin: Moguli <br>
         - Innsbruckissa <br>
         - joku huhtikuinen ilta paikallisessa</p>
    `,
    image: "kaljat.jpg",
    author: "Moguli",
  },
  {
    id: 5,
    type: "article",
    title: "JYTYn vappu ilman tiliä",
    content: `
      <p>Kuvitelkaa JYTYn vappuvisio koossa. Fyysinen lehti, räväkät jutut ja myyntipiste kompassilla opiskelijajoukko kerääntyy ihastelemaan! Sitten kuuluu piip piip piip: pankki ei hyväksy pöytäkirjojamme. Lähetimme ne korjattuina, uudesta kokouksesta pöytäkirjoina, mutta mikään lähetys ei herättänyt pankin kiinnostusta. Tili on edelleen mysteeri, ja vappulehti odottaa painokuntoa tai siis ei odota, vaan on karannut verkkoon.</p>
      <p>Syntyi byrokratian kevätkaruselli. Pöytäkirjat kasaantuivat pankin inboksiin, ja JYTYn suuret vappu unelmat kutistuivat kokoon kuin fuksilakki kevätauringossa. “Painetaan lehdet, myydään haalarimerkkejä!”, mutta ensin piti ratkaista tiliasia. Pankilta tuli vain samaa vastausta ja lehden kansi jäi haamulehdelle ikuisesti odottamaan.</p>
      <p>Lopulta luovutimme fyysisen lehden kanssa ja hyppäsimme digitaaliseen vaappulehteen. Tervetuloa tähän digitaaliseen vapu_Lehoon, jossa lehden sivut skrollautuvat ja jutut latautuvat sekunneissa.</p>
      <p>Kevään opetus? Jos haaveilet vappulehden myyntipöydästä, varmista ensin pankkitili – tai suosi suoraan verkkoon.</p>
    `,
    image: null,
    author: "Juho Järvi"
  },
  {
    id: 6,
    type: "article",
    title: "Matematiikan tukihenkilön mietteen teekkareista",
    content: `
      <p>Teekkarielämä Jyväskylässä alkoi vuonna 2021 ilman suurempia fanfaareja. Ensimmäisissä kastajaisissa veteen upposi pienehkö joukko aloittelevia opiskelijoita. Kun kalpeat teekkarit nousivat vedestä hytisten, tuntui mahdolliselta, että Jyväsjärvi sammuttaisi teekkarihengen liekin ennen kuin se edes ehtii kunnolla syttymään. Pienimuotoinen alku ei kuitenkaan ollut huono enne, ehkäpä päinvastoin. Muutamassa vuodessa tekniikanopiskelijoiden määrä on kasvanut, jollei räjähdysmäisesti, niin ainakin jollakin tavoin tussahtaen. Nykyiselläänhän Algolaisia ei voi juuri olla näkemättä..vaikka aktiivisesti yrittäisikin.</p>
      <p>Mutta millaisia Jyväskylän teekkareista sitten on oikein tullut?</p>
      <p>Ideaaliset tekniikan opiskelijathan ovat valtionhallinnon koulutusstrategian mukaan yhdenmukaisia ja keskikokoisia. Kivikylän palvaamoa ja yliopiston tavoitteita lainaten :”Opetusprosessi vaatii tarkkuutta, jotta insinöörit ovat tasalaatuisia ja kauniin muotoisia. Tärkeää on, että opiskelijamateriaali on mahdollisimman tuoretta ja laadukasta. Lisäksi tarvitaan mausteita, suolaa ja muita lisäaineita, jotka antavat insinöörille sen tunnusomaisen maun ja rakenteen.”</p>
      <p>Jokin osa tässä prosessissa lienee onnistunut. Jyväskylän teekkareissa, kuten myös makkaroissa on, sikamaisia piirteitä. Tarkasti harkittu vaaleanpunamusta haalari edustaa ajatusta tukevasti mudassa olevista sorkista ja täynnä humanistisia ajatuksia olevasta päästä. Insinöörien mauttomuuteen tai rakenteeseen en ota kantaa. Homogeenisuuden tavoite lienee kuitenkin epäonnistunut liki totaalisesti. Vaikka yrittäisikin, niin näin heterogeenisen joukon kokoaminen ei välttämättä onnistuisi.</p>
      <p>Jos siis tähänkin asti Jyväskylän teekkarituotantoa on vaivannut jonkinlainen aivan liian vapaa henki, niin vielä pahempaa on luvassa, kun teekkariohjelmat leviävät matemaattis-luonnontieteelliseen tiedekuntaan. Epäilemättä diversiteetti ja sekoilun määrä vain lisääntyvät. Tuskin kuitenkaan on epäilyksiä etteikö jo olemassa oleva ponteva, mutta hiukan vinossa oleva teekkarihenki leviäisi myös uusien ohjelmien kandidaatteihin.</p>
    `,
    image: null,
    author: "Jyväskylän teekkareiden matemaattinen tukihenkilö"
  }
];

export default function Vappu() {
  return (
    <Layout>
      <div className="container">
        <h1 className="vappu-title">Jyty Vapu_leho</h1>
        <div>
          {articles.map((item) =>
            item.type === "article" ? (
              <div key={item.id} className="article-container">
                <h2 className="article-title">{item.title}</h2>
                {item.image && (
                  <figure className="article-figure">
                    <img src={item.image} alt={item.title} className="article-image" />
                    <figcaption className="article-caption">{`Kuva: ${item.title}`}</figcaption>
                  </figure>
                )}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
                <p className="article-author">{`Kirjoittanut: ${item.author}`}</p>
              </div>
            ) : (
              <blockquote key={item.id} className="quote-container">
                <p className="quote-content">{item.content}</p>
                <footer className="quote-author">{`- ${item.author}`}</footer>
              </blockquote>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}