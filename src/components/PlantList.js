import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantcards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));
  return <ul className="cards">{plantcards}</ul>;
}

export default PlantList;
