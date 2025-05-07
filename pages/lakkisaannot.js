import styles from "../styles/saannot.module.css";
import Layout from "../components/Layout";

export default function Lakkisaannot() {
    return (
        <Layout>
            <div className={styles.rules}>
                <h1 className={styles.title}>Jyväskylän teekkarilakkiohjesääntö</h1>

                <h2>Lakin kuvaus</h2>
                <p>
                    Jyväskylän teekkarilakki on kahdeksankulmainen, Jyväskylän kävelykadun Kompassin muodon mukaan. Lakin sisäpuoli on Jyväskylän yliopiston värien mukaisesti puoliksi sininen ja puoliksi oranssi. Lakin kokardissa yhdistyvät Jyväskylä sekä tekniikka. Kokardi muodostuu Jyväskylän ylioppilaskunnan (JYY) soihdusta, jota ympäröi tekniikan ratas.
                </p>
                <p>
                    Ensimmäisen vuoden diplomi-insinööriopiskelijoista eli fukseista tulee teekkareita vappuna, jolloin kasteen jälkeen lakin saa painaa päähänsä. Lakin kantoaika alkaa siis vapun kasteesta ja päättyy syyskuun viimeisenä päivänä pidettäviin lakinlaskijaisiin.
                </p>

                <h2>1 § Teekkarilakki</h2>
                <p>
                    Jyväskylän teekkarilakissa on valkoinen samettinen kahdeksankulmainen päällys. Päällyksen keskeltä lähtee musta silkkitupsu. Lakin lippa sekä samettireunus ovat mustia ja sen hikinauha on joko nahkaa tai nahankaltaista valmistetta. Lakin vuori on puoliksi tummansininen ja puoliksi oranssi. Lakin samettireunuksen keskellä on Jyväskylän teekkarikokardi, jossa on puoliratas sekä ylioppilaskunnan soihtu.
                </p>

                <h2>2 § Lakin kantoaika</h2>
                <p>
                    Teekkarilakin kantoaika on 30.4.–30.9. Teekkarilakin saa painaa päähänsä 30.4. samaan aikaan, kun Minna Canthin patsas lakitetaan kello 18.00. Lakki lasketaan 30.9. kello 00.00. Muina aikoina teekkarilakkia ei saa kantaa ilman erillistä lakkilupaa, ellei pysyväisohjesääntö erikseen sitä salli. Lakkilupaa haetaan kirjallisesti Jyväskylän teekkariyhdistys ry:n hallitukselta vähintään kolmea arkipäivää etukäteen. Hakemuksessa on käytävä selväksi, mihin tarkoitukseen lakkia aikoo käyttää. Lakkia saa käyttää vain lakkiluvassa määrättynä aikana ja siinä mainitussa tilaisuudessa.
                </p>

                <h2>3 § Lakin kanto-oikeus</h2>
                <p>
                    Kanto-oikeus voidaan myöntää opiskelijalle, joka opiskelee Jyväskylän yliopistossa tekniikan kandidaatiksi ja/tai diplomi-insinööriksi tai tekniikan tohtoriksi. Lakki ojennetaan opiskelija- ja teekkariperinteisiin perehtyneelle ensimmäisen vuoden tekniikan ylioppilaalle 30.4. yhteisessä teekkarikasteessa, muutoin lakki ojennetaan äitienpäivänä. Lakin käyttöoikeus on elinikäinen.
                </p>

                <h2>4 § Lakin käyttö</h2>
                <p>
                    Teekkarilakkia käytetään kunnioittaen ja sitä halventamatta. Lakkia ei saa luovuttaa henkilöille, joilla ei ole teekkarilakin kanto-oikeutta. Teekkareiden kokoontuessa noustaan keskiyöllä korkeimmalle mahdolliselle kohdalle, nostetaan lakki käsi ojennettuna pään yläpuolelle ja lauletaan Teekkarihymni pimennetyssä tilassa, mikäli mahdollista. Lakin kantoaikana lakki lasketaan takaisin päähän teekkarihymnin jälkeen, mutta lakinlaskijaisissa se lasketaan olkapäälle.
                </p>

                <h2>5 § Pysyväisohjesääntö</h2>
                <p>Teekkarilakkia saa käyttää ilman erillistä lupaa seuraavissa tilaisuuksissa:</p>
                <ul>
                    <li>Jyväskylän yliopiston esittelytilaisuuksissa</li>
                    <li>Itsenäisyyspäivän soihtukulkueessa</li>
                    <li>Lippuairueessa toimiville</li>
                    <li>Jäynäkisoissa</li>
                    <li>Titeenien taistoissa</li>
                    <li>TEKin valtakunnallisissa tapahtumissa</li>
                    <li>Tietoteekkariyhdistys ry:n valtakunnallisissa tapahtumissa</li>
                    <li>Jyväskylän yliopiston ylioppilaskunnan (JYY) edustajiston kokouksissa</li>
                    <li>Suomen ylioppilaskuntien liiton (SYL) liittokokouksissa</li>
                </ul>

                <h2>6 § Muut säädökset</h2>
                <p>
                    Teekkarilakkia ei kuulu korjata itse, ja jokaista reikää ja repsottavaa kohtaa vaalitaan merkkinä menneistä vuosista. Jos kuitenkin lakin kunto heikkenee liikaa, niin lakki kuuluu hävittää olemattomiin kaapinperälle ja hankkia uusi lakki tilalle.
                </p>
                <p>
                    Jos teekkari osoittaa jatkuvaa piittaamattomuutta teekkarilakkia kohtaan, niin häntä voidaan rangaista teekkarikerhon päättämällä tavalla.
                </p>

                <h2>7 § Ohjesäännön muuttaminen</h2>
                <p>
                    Tämä ohjesääntö hyväksyttiin ensimmäistä kertaa keväällä 2022. Ohjesääntöä voidaan muuttaa tätä ohjesääntöä ylläpitävän yhdistyksen kokouksessa. Tätä ohjesääntöä ylläpitää Jyväskylän teekkariyhdistys ry.
                </p>
            </div>
        </Layout>
    );
}
