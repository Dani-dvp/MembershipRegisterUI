import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CompetitionCard from "../competitionCard/competition-card";
import "../homepage/homepage.css";

const HomePage = () => {
  const [data, setData] = useState([]);

  const getCompetitionData = () => {
    axios
      .get(`http://localhost:5296/Competition`)
      .then((response) => {
        setData(
          response.data,
          console.log("Hej"),
          console.log(response.data),
          console.log("Hej igen")
        );
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getCompetitionData();
  }, []);
  const displayData = data.map((data) => {
    return (
      <CompetitionCard
        name={data.name}
        description={data.description}
        winner={data.winner}
      />
    );
  });

  return (
    <Container className="homepage">
      <div>{displayData}</div>
    </Container>
  );
};

export default HomePage;
