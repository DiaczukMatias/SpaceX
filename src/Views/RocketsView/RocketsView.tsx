"use client";

import React, { useEffect, useState } from "react";
import styles from "./Rockets.module.css";
import Navbar from "@/Components/Navbar/Navbar";

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  first_flight: string;
  country: string;
  company: string;
}

const RocketsView: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v3/rockets");
        if (!response.ok) {
          throw new Error("Failed to fetch rockets data");
        }
        const data: Rocket[] = await response.json();
        setRockets(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRockets();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>SpaceX Rockets</h1>
      <div className={styles.rocketsContainer}>
        {rockets.map((rocket) => (
          <div key={rocket.rocket_id} className={styles.rocketCard}>
            <h2 className={styles.rocketName}>{rocket.rocket_name}</h2>
            <p className={styles.description}>{rocket.description}</p>
            <p>
              <strong>First Flight:</strong> {rocket.first_flight}
            </p>
            <p>
              <strong>Country:</strong> {rocket.country}
            </p>
            <p>
              <strong>Company:</strong> {rocket.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketsView;
