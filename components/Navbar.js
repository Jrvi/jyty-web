
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/layout.module.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles["logo-container"]}>
        <Link href="/" className={styles["logo-link"]}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="JYTY Logo" />
            <span className={`${styles["logo-text"]} ${styles["desktop-only"]}`}>
              Jyväskylän Teekkariyhdistys ry
            </span>
          </div>
        </Link>

        <button
          className={styles["menu-toggle"]}
          onClick={() => setNavOpen(!navOpen)}
        >
          ☰
        </button>
      </div>

      <nav className={`${styles.nav} ${navOpen ? styles.open : ""}`}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item-dropdown"]}>
            <span className={styles["nav-link"]}>Yhdistys</span>
            <ul className={styles["dropdown-menu"]}>
              <li><Link href="/hallitus" className={styles["nav-link"]}>Hallitus</Link></li>
              <li><Link href="/saannot" className={styles["nav-link"]}>Säännöt</Link></li>
              <li><Link href="/lakkisaannot" className={styles["nav-link"]}>Lakkisäännöt</Link></li>
            </ul>
          </li>

          <li className={styles["nav-item-dropdown"]}>
            <span className={styles["nav-link"]}>Julkaisut</span>
            <ul className={styles["dropdown-menu"]}>
              <li><Link href="/vappulehti" className={styles["nav-link"]}>Vappulehti 2025</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
