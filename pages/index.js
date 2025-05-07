import styles from "../styles/home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles["home-container"]}>
        <h1 className={styles["home-title"]}>Tervetuloa JYTYn kotisivuille!</h1>
        <h2 className={styles["home-subtitle"]}>Jyväskylän Teekkariyhdistys ry</h2>

        <p className={styles["home-paragraph"]}>
          Olemme Jyväskylän teekkarien oma yhdistys, joka vaalii teekkarikulttuuria,
          järjestää tapahtumia ja julkaisee perinteikästä vappulehteä. Sivuiltamme
          löydät ajankohtaista tietoa toiminnastamme, hallituksesta ja menneistä
          saavutuksistamme.
        </p>

        <div className={styles["home-buttons"]}>
          <Link href="/hallitus" className={styles["home-button"]}>Tutustu hallitukseen</Link>
          <Link href="/vappulehti" className={styles["home-button"]}>Lue vappulehti</Link>
          <Link href="/saannot" className={styles["home-button"]}>Katso säännöt</Link>
        </div>
      </div>
    </Layout>
  );
}
