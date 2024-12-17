"use client";

import React from "react";
import styles from "./LandingView.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import { useRouter } from "next/navigation";

const LandingView = () => {
  const router = useRouter();
  const handleLearnMore = () => {
    router.push("/home");
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>STARLINK MISSION</h1>
        <p className={styles.description}>
          SpaceX, founded by visionary entrepreneur Elon Musk, is a pioneering
          aerospace company dedicated to pushing the boundaries of space
          exploration. With cutting-edge technology and a relentless drive for
          innovation, SpaceX aims to drastically reduce the cost of space
          travel, develop sustainable space infrastructure, and make humanity a
          multiplanetary species, starting with the colonization of Mars.
        </p>
        <button onClick={handleLearnMore} className={styles.button}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingView;
