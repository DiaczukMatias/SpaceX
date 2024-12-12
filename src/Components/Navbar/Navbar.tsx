import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a href="/rockets">
            <a>ROCKETS</a>
          </a>
        </li>
        <li>
          <a href="/launches">
            <a>LAUNCHES</a>
          </a>
        </li>
        <li>
          <a href="/rockets">
            <a>ROCKETS</a>
          </a>
        </li>
        <li>
          <a href="/rockets">
            <a>ROCKETS</a>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
