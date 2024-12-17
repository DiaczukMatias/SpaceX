// components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © 2024 Mi Proyecto. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
