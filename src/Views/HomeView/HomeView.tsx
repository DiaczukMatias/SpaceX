"use client";

import React, { useEffect, useState } from "react";

interface Launch {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
}

const HomeView: React.FC = () => {
  const [spacexData, setSpacexData] = useState<Launch[]>([]);

  useEffect(() => {
    const getSpacexData = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v3/launches");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Launch[] = await response.json();
        setSpacexData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSpacexData();
  }, []);

  return (
    <div>
      {spacexData.map((launch) => (
        <div key={launch.flight_number}>
          <p>Nombre de la misión: {launch.mission_name}</p>
          <p>Fecha de lanzamiento: {launch.launch_date_utc}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeView;
