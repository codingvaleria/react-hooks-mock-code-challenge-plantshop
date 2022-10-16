import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newplant) {
    setPlants((plants) => {
      return [...plants, newplant];
    });
  }

  function handleSearching(search){
    setPlants(plants.filter(plant=> plant.name.toLowerCase().includes(search)))
  }
 

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search onSearching={handleSearching}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
