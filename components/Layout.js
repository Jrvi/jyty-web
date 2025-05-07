import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles["layout-navbar-footer"]}>
        <Navbar />
      </div>
      <main className={styles["layout-main"]}>{children}</main>
      <div className={styles["layout-navbar-footer"]}>
        <Footer />
      </div>
    </div>
  );
}
