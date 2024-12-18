import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter(); // Hook para manejar la navegación

  const handleLogoClick = () => {
    router.push("/"); // Redirigir a la landing page
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logoContainer}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <Image src="/logoo.png" alt="Logo" width={190} height={190} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="/rockets">
            <p>ROCKETS</p>
          </a>
        </li>
        <li>
          <a href="/home">
            <p>HOME</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
