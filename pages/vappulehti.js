import Crossword from "../components/Crossword";
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
    image: "rentoruusu.JPG",
    author: "Eemil Hukkanen ja Kasper Pelkonen",
  },
  {
    id: 2,
    type: "article",
    title: "Teekkarit Jyväskylässä",
    content: `
      <p>Teekkarit ovat tulleet Jyväskylään jäädäkseen. Mitä ajatuksia teekkarit, teekkarikulttuuri ja jyvääskyläläisyys yhdessä herättävät?</p>
      <p>- Itse paljasjalkaisena jyväskyläläisenä on yhä vähän outo ajatus että täällä on teekkareita. Niin pitkään kun muistan JYU on tunnettu opetuspuolen linjoista, ei teknisestä puolesta. Sitä varten ajattelin täällä olevan ammattikorkea, kertoo tilastotieteiden ainejärjestö Tiltti ry:n puheenjohtaja Juho Reiman.</p>
      <p>Eikä tässä vielä kaikki. Nyt kun teekkareita on saatu Jyväskylään, lisää on tulossa. Nykyisen kahden teekkarilinjan lisäksi Jyväskylään on tulossa kaksi uutta teekkarialaa, datatiede ja turvallisuusteknologia. Täten myös jyväskyläläinen teekkariyhteisö kasvaa ja kaupunkiin virtaa lisää teekkareita kaupunkilaisten iloksi. Nykyiset teekkarit odottavat innoissaan lisää teekkareita Suomen Ateenaan.</p>
      <p>- Mahtavaa saada monipuolisuutta Jyväskylän teekkarikenttään, kommentoi Algo ry:n puheenjohtaja Rene Kangas.</p>
      <p<Myös muualla uusia teekkarialoja odotetaan innolla. Uusien tekniikan alojen kautta teekkareita tulee myös IT-tiedekunnan ulkopuolelle.</p<
      <p>- Toivon että tilasto- ja datatieteiden tutkimusohjelman muuttaminen DI-ohjelmaksi toisi niitä uusia hakijoita alalle. Varsinkin kun kyseessä on maan ainoa tilastotieteen maisteritason ohjelma. Tilastotiede kuitenkin on modernissa informaatioyhteiskunnassa aika oleellinen ala, Juho kommentoi.</p>
      <p>Tulevat teekkarit pääsevätkin osaksi jo muutaman vuoden kehittynyttä jyvääskyläläistä teekkariyhteisöä. Tulevia opiskelijoita nykyinen meininki teekkareiden kesken lämmittää yhtä varmasti ja mukavasti kuin sauna teekkarikasteen jälkeen.</p>
      <p>- Meillä on täällä mahtava [teekkari-]kulttuuri, kehuu Algo ry:n varapuheenjohtaja Essi Pakkala erään tapahtuman jatkoilla.</p>
      <p>- Pikkuhiljaa teekkarikulttuuri on alkanut iskostumaan ja vakiintumaan Jyväskylässä, ja perinteiset teekkaritapahtumat ovat jo tärkeä osa kulttuuria, komppaa Rene.</p>
      <p>Nykyään Algo on Jyväskylän ainoa teekkarikilta, mutta näin ei välttämättä ole kauaa uusien opinto-ohjelmien alkamisen jälkeen.</p>
      <p>- Koska tilastotieteen koko linjasta tulee teekkarilinja, niin Tiltistä on mitä todennäköisemmin tulossa Jyväskylän vanhin teekkarijärjestö, Tiltistä Juho visioi.</p>
      <p>Tulevaa onkin jo pohdittu ja visioitu, sillä teekkarikulttuurissa on oleellista sen eläminen ajan mukana. Teekkarit ovat kuitenkin jo jättäneet jälkensä täkäläiseen opiskelijakulttuuriin, sillä esimerkiksi teekkarikasteesta on tullut tärkeä osa vapun juhlintaa. Yksi osoitus teekkarikulttuurin kehittämisestä on tämä ensimmäinen jyväskyläläisten teekkareiden tekemä vappulehti.</p>
      <p>- Pian meillä yhtä iso vappulehti kuin Julkku ja Äpy, Essi visioi.</p>
      <p>Tätä vappulehtipuutosta JYTY on lähtenyt ensimmäisenä korjaamaan. Lehden levikkiä ynnäillessä ei ehkä heti olla samalla tasolla, mutta matka sinne on alkanut. Aika näyttää, mitä kaikkea teekkarit ja JYTY keksivät tulevaisuudessa.</p>
      <p>- Toivottavasti JYTY:n kanssa yhdessä saadaan edistettyä teekkarikulttuuria laajemmin Jyväskylässä, Rene päättää.</p>
    `,
    author: "Lassi Laitinen"
  },
  {
    id: 3,
    type: "quote",
    content: "“Mikä vitun setämies kerho”",
    author: "Rene Kangas",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    type: "article",
    title: "Matematiikan tukihenkilön mietteet teekkareista",
    content: `
      <p>Teekkarielämä Jyväskylässä alkoi vuonna 2021 ilman suurempia fanfaareja. Ensimmäisissä kastajaisissa veteen upposi pienehkö joukko aloittelevia opiskelijoita. Kun kalpeat teekkarit nousivat vedestä hytisten, tuntui mahdolliselta, että Jyväsjärvi sammuttaisi teekkarihengen liekin ennen kuin se edes ehtii kunnolla syttymään. Pienimuotoinen alku ei kuitenkaan ollut huono enne, ehkäpä päinvastoin. Muutamassa vuodessa tekniikanopiskelijoiden määrä on kasvanut, jollei räjähdysmäisesti, niin ainakin jollakin tavoin tussahtaen. Nykyiselläänhän Algolaisia ei voi juuri olla näkemättä..vaikka aktiivisesti yrittäisikin.</p>
      <p>Mutta millaisia Jyväskylän teekkareista sitten on oikein tullut?</p>
      <p>Ideaaliset tekniikan opiskelijathan ovat valtionhallinnon koulutusstrategian mukaan yhdenmukaisia ja keskikokoisia. Kivikylän palvaamoa ja yliopiston tavoitteita lainaten :”Opetusprosessi vaatii tarkkuutta, jotta insinöörit ovat tasalaatuisia ja kauniin muotoisia. Tärkeää on, että opiskelijamateriaali on mahdollisimman tuoretta ja laadukasta. Lisäksi tarvitaan mausteita, suolaa ja muita lisäaineita, jotka antavat insinöörille sen tunnusomaisen maun ja rakenteen.”</p>
      <p>Jokin osa tässä prosessissa lienee onnistunut. Jyväskylän teekkareissa, kuten myös makkaroissa on, sikamaisia piirteitä. Tarkasti harkittu vaaleanpunamusta haalari edustaa ajatusta tukevasti mudassa olevista sorkista ja täynnä humanistisia ajatuksia olevasta päästä. Insinöörien mauttomuuteen tai rakenteeseen en ota kantaa. Homogeenisuuden tavoite lienee kuitenkin epäonnistunut liki totaalisesti. Vaikka yrittäisikin, niin näin heterogeenisen joukon kokoaminen ei välttämättä onnistuisi.</p>
      <p>Jos siis tähänkin asti Jyväskylän teekkarituotantoa on vaivannut jonkinlainen aivan liian vapaa henki, niin vielä pahempaa on luvassa, kun teekkariohjelmat leviävät matemaattis-luonnontieteelliseen tiedekuntaan. Epäilemättä diversiteetti ja sekoilun määrä vain lisääntyvät. Tuskin kuitenkaan on epäilyksiä etteikö jo olemassa oleva ponteva, mutta hiukan vinossa oleva teekkarihenki leviäisi myös uusien ohjelmien kandidaatteihin.</p>
    `,
    image: null,
    author: "Jyväskylän teekkareiden matemaattinen tukihenkilö, Roope"
  },
  {
    id: 8,
    type: "article",
    title: "Jyväskylän teekkarikulttuurista",
    content: `
    <p>On ollut ilo seurata, miten ensin Algo ja nyt jatkossa Jyväskylän teekkariyhdistys on lähtenyt rakentamaan täysin tyhjästä teekkarikulttuuria Jyväskylän yliopistoon. On suuri ponnistus perustaa uusi ainejärjestö, mutta vielä suurempi on synnyttää teekkarikulttuuria kaupunkiin ja yliopistoon, jossa sellaista ei vielä ole ollut. Ylioppilaskunnan näkökulmasta tämä on sujunut vallan mainiosti. Odotan innolla minkälaisia teekkarijäyniä saadaan vielä tulevina vuosina nähdä, kunnon hyvän mielen jäynä olisi kirsikka kakun päälle Jyväskylän teekkareille!</p>
    <p>Lopuksi haluan antaa tsempit kaikille teille tulevien vuosien haasteisiin. Teekkareita tulee myös uusiin tiedekuntiin ja uusia kiltojakin varmaan syntynee, joten on oma haasteensa rueta luomaan yhtenäistä toimintaa usean eri järjestön kesken. Siksi onkin hienoa, että Jyväskylän teekkariyhdistys on luotu tätä silmälläpitäen jo nyt. Kastukoon teekkarit jatkossakin vappuisin ja nouskoon teekkarilakit korkealla korkeuksiin tulevinakin vuosina!</p>
    <p>Hyvää teekkarivappua toivottaen,</p>
    <p>Petro Pitkänen</p>
    <p>JYYn jäsenpalvelu- ja järjestöasiantuntija</p>
    `,
    author: "Petro Pitkänen"
  },
  {
    id: 9,
    type: "article",
    title: "VatelmaLimeKiliju 5l BY: Eero Holopainen",
    content: `
      <p>Raaka-aineet:</p>
      <p>400g pakaste vadelma</p>
      <p>500g sokeri</p>
      <p>4l vettä</p>
      <p>0.5 dl limemehua</p>
      <p>1/5 tl hiivaa (herneen kokoinen)</p>
      <br>
      <p>lisäksi:</p>
      <p>sokeria ja rusinoita pullotukseen</p>
      <p>votkaa desinfiointiin </p>
      <p>pulloja</p>
      <br>
      <p>Panokalusto:</p>
      <p>10l ämpäri</p>
      <p>10l ämpäri kansi</p>
      <p>käymisastian vesilukko tiivisteellä</p>
      <p>Lappo letku</p>
      <br>
      <p>Resepti:</p>
      <p>Valmista aluksi panokalusto poraamalla reikä ämpärin kanteen, ja asentamalla siihen vesilukko. Tämän jälkeen voit halutessasi pestä ämpärin, mikäli et kaipaa lisämausteita esimerkiksi tolusta tai vanhasta oksennuksesta. Pesemisen jälkeen desinfioi astia kaatamalla sinne n. 1dl votkaa, ja ravistamalla sekä pyörittelemällä astiaa. Jos haluat votkasta lisämausteen, jätä se ämpärin pohjalle. Jos et, kaada lasiin ja juo pois.</p>
      <p>Aloita kiljun valmistus mittaamalla 4l vettä kattilaan ja kiehauta vesi. Lisää pakastemarjat ja anna kiehua noin 2 min. Ota kattila liedeltä, ja sekoita sokerit joukkoon. Kaada seos käymisastiaan ja lisää limen mehu. Jäähdytä seos kädenlämpöiseksi ja lisää hiiva. Sulje astia tiiviisti ja anna käydä astiassa noin 1-2vko.</p>
      <p>Astiassa käymisen Jälkeen pullota lapon avulla kilju pulloihin, sekä lisää 1 rkl sokeria pulloon, sekä yksi rusina. Siirrä pullot viikoksi käymään jääkaappiin. Tämän jälkeen rakas kiljumme on valmista nautittavaksi.</p>
    `,
    image: "viini.jpg",
    author: "Eero Pitkänen"
  },
  {
    id: 10,
    type: "article",
    title: "JYTINÄÄ teekkareiden edunvalvontaan!",
    content: `
    <p>Jyväskylän teekkareille on luvassa uutta potkua ja yhteisöllisyyttä, kun kaksi uutta teekkarialaa starttaavat matemaattis-luonnontieteellisessä tiedekunnassa syksyllä 2026. Uusien alojen menestyksen ja onnistuneen integraation takaamiseksi Jyväskylän teekkarikulttuuriin on tärkeää saada yhteinen ja saavutettava kattojärjestö. Kattojärjestön on tärkeää kannustaa yhteisöllisyyteen, ylläpitää ja edistää meidän omaa teekkarikulttuuriamme. Kaikista tärkeimpänä olla ylpeä ja rakentaa meidän näköistämme kulttuuria.</p>
    <p>Kattojärjestömme konkreettiset edunvalvonnan ja muut tehtävät:</p>
    <p>- Lakkisääntöjen hallinta ja lakkitilauksen toteuttaminen</p>
    <p>- Uusien teekkarien orientaatio osaksi teekkarikultuuria.</p>
    <p>- Osallistuminen teekkariperinne tapahtumien järjestämiseen</p>
    <p>- Osallistua ja toimia teekkarien äänenä yliopiston eri tiedekuntien kehitys tapaamisissa.</p>
    <p>- Ja viimeisenä olla luomassa Jyväskylän ensimmäistä teekkarilehteä</p>
    <p>Olemme monitieteellinen perustajajoukko, jonka yhteinen teekkarisydän sykkii Jyväskylän oman teekkariyhteisön rakentamiselle. Haluamme luoda kampukselle kulttuurin, jossa rautainen osaaminen, rennot sitsit, perinteinen Wappuhulluus ja Keski-Suomen omaleimainen twisti elävät sulassa sovussa, ja samalla päivittää teekkariperinteet nykypäivän arvoihin. Jos teekkarihumu ja perinteiden luominen sykahdyttää, niin liity mukaan syksyllä. tule vaikuttamaan siihen, miltä Jyväskylän teekkarikulttuuri näyttää vuosikymmeniksi eteenpäin!</p>
    `,
    author: "Eemil Hukkanen ja Juho Järvi"
  },
  {
    id: 11,
    type: "article",
    title: "Ynnän mietteet",
    content: `
    <p>Ynnässä on tykätty ottaa vaikutteita teekkariperinteistä, ja nähdään teekkarien saapuminen Jyväskylään ehdottoman hyvänä asiana. Tähän mennessä Algon kasvua ja menoa ollut mukava seurata, joten uskon uusien matemaattisluonnontieteellisten DI-linjojen varmasti tuovan koko Jyväskylän kaupunkiin paljon lisää hyvää ja menevää opiskelijakulttuuria. Tulevista DI-ohjelmista etenkin turvallisuusteknologian linja on Ynnän toiminnalle oleellinen, sillä se tulee olemaan fysiikkapainotteinen linja. Olemme viime vuonna keskustelleet fysiikan laitoksen kanssa kyseisen DI-ohjelman opiskelijoiden sisällyttämisestä Ynnän toimintaan ainakin siihen asti, kunnes linjan opiskelijat perustavat oman killan.</p>
    <p>Hyvää vappua toivottaen</p>
    <p>Roope Poikala</p>
    <p>Puheenjohtaja</p>
    <p>Ynnä ry</p>
    `,
    author: "Roope Poikola"
  }
];

export default function Vappu() {
  return (
    <Layout>
      <div className="container">
        <h1 className="vappu-title">Jyty Vapu_leho</h1>
        
        {/* Sisällysluettelo */}
        <nav className="table-of-contents">
          <h2>Sisällysluettelo</h2>
          <ul>
            {articles
              .filter((item) => item.type === "article")
              .map((item) => (
                <li key={item.id}>
                  <a href={`#article-${item.id}`}>{item.title}</a>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          {articles.map((item) =>
            item.type === "article" ? (
              <div key={item.id} id={`article-${item.id}`} className="article-container">
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
        <Crossword />
      </div>
    </Layout>
  );
}