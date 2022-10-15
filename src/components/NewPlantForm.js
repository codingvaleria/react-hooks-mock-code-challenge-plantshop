import React, { useState } from "react";

function NewPlantForm({ handleAddPlant }) {
  const [plantFormData, setPlantFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  function handleChange(e) {
    setPlantFormData((plantFormData) => {
      return {
        ...plantFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(plantFormData),
    })
      .then((result) => result.json())
      .then((data) => handleAddPlant(data)); //callback
    setPlantFormData({
      name: "",
      image: "",
      price: ""
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={plantFormData.name}
          placeholder="Plant name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          value={plantFormData.image}
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          value={plantFormData.price}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
