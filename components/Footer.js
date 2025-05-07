import styles from "../styles/layout.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p>© 2025 Jyväskylän teekkariyhdistys. Kaikki oikeudet pidätetään.</p>
        <div className={styles["social-links"]}>
          <a
            href="https://www.instagram.com/jyvaskylanteekkarit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@jyvaskylanteekkarit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
