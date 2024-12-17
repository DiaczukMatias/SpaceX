"use client";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HomeView.module.css";

interface Mission {
  mission_name: string;
  mission_id: string[] | string;
  description: string;
  wikipedia?: string;
  website?: string;
  twitter?: string;
}

const HomeView = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v3/missions");
        if (!response.ok) {
          throw new Error("No se pudieron cargar las misiones.");
        }
        const data: Mission[] = await response.json();
        setMissions(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  // Avanzar automáticamente el carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === missions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Avanza cada 5 segundos

    return () => clearInterval(interval);
  }, [missions]);

  // Funciones para mover el carousel manualmente
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === missions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? missions.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      {/* Imagen de fondo */}
      <div className={styles.backgroundImage}>
        <Image
          src="/earth.jpg"
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          className={styles.fullscreenImage}
        />
        <div className={styles.gradientOverlay}></div>
      </div>

      <h1 className={styles.title}>SPACEX MISSIONS</h1>
      <div className={styles.carouselContainer}>
        {loading && <p className={styles.loading}>Cargando misiones...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {missions.length > 0 && (
          <div className={styles.carousel}>
            <button onClick={handlePrev} className={styles.navButton}>
              &#8249;
            </button>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.missionName}>
                  {missions[currentIndex].mission_name}
                </h2>
                <p className={styles.details}>
                  {missions[currentIndex].description}
                </p>
                {/* Botones con los enlaces de Wikipedia, Website y Twitter */}
                <div className={styles.cardLinks}>
                  {missions[currentIndex].wikipedia && (
                    <a
                      href={missions[currentIndex].wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonLink}
                    >
                      Wikipedia
                    </a>
                  )}
                  {missions[currentIndex].website && (
                    <a
                      href={missions[currentIndex].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonLink}
                    >
                      Website
                    </a>
                  )}
                  {missions[currentIndex].twitter && (
                    <a
                      href={missions[currentIndex].twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonLink}
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button onClick={handleNext} className={styles.navButton}>
              &#8250;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeView;
