import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/logoo.png" alt="Logo" width={190} height={190} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/rockets">
            <p>ROCKETS</p>
          </a>
        </li>
        <li>
          <a href="/launches">
            <p>LAUNCHES</p>
          </a>
        </li>
        <li>
          <a href="/rockets">
            <p>ROCKETS</p>
          </a>
        </li>
        <li>
          <a href="/rockets">
            <p>ROCKETS</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
