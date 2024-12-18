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
  const [selectedRocket, setSelectedRocket] = useState<Rocket | null>(null);

  // Función para mapear los nombres de los cohetes a sus imágenes
  const getRocketImage = (rocketName: string): string => {
    switch (rocketName.toUpperCase()) {
      case "FALCON 1":
        return "/FALCON1.png";
      case "FALCON 9":
        return "/FALCON9.png";
      case "STARSHIP":
        return "/STARSHIP.png";
      case "FALCON HEAVY":
        return "/FALCONHEAVY.png";
      default:
        return "/rockets/default.png";
    }
  };

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

  const handleRocketClick = (rocket: Rocket) => {
    setSelectedRocket(rocket);
  };

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>SPACEX ROCKETS</h1>

      {/* Mostrar todas las tarjetas */}
      <div className={styles.rocketsContainer}>
        {rockets.map((rocket) => (
          <button
            key={rocket.rocket_id}
            className={styles.button}
            onClick={() => handleRocketClick(rocket)}
          >
            <div className={styles.rocketInfo}>
              <h2 className={styles.rocketName}>{rocket.rocket_name}</h2>
            </div>
          </button>
        ))}
      </div>

      {/* Mostrar información seleccionada */}
      {selectedRocket && (
        <div className={styles.selectedRocket}>
          <div className={styles.selectedInfo}>
            <h2 className={styles.rocketName}>{selectedRocket.rocket_name}</h2>
            <p className={styles.description}>{selectedRocket.description}</p>
            <p className={styles.Flight}>
              <strong>First Flight:</strong> {selectedRocket.first_flight}
            </p>
            <p className={styles.country}>
              <strong>Country:</strong> {selectedRocket.country}
            </p>
            <p className={styles.company}>
              <strong>Company:</strong> {selectedRocket.company}
            </p>
          </div>
          <div className={styles.selectedImage}>
            <img
              src={getRocketImage(selectedRocket.rocket_name)} // Obtener la imagen correspondiente
              alt={selectedRocket.rocket_name}
              className={styles.rocketImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RocketsView;
