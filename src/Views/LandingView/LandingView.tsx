"use client";

import React from "react";
import styles from "./LandingView.module.css";
import Image from "next/image";
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
      <div className={styles.logoContainer}>
        <Image src="/logoo.png" alt="SpaceX Logo" width={1000} height={900} />
      </div>
      <p className={styles.description}>
        SpaceX is an aerospace company founded by Elon Musk with the goal of
        revolutionizing space exploration, reducing the cost of space travel,
        and eventually enabling the colonization of Mars.
      </p>
      <button onClick={handleLearnMore} className={styles.button}>
        Learn More
      </button>
    </div>
  );
};

export default LandingView;
