import React,{useState}from "react";

function PlantCard({ plant }) {
const [isInStock, setisInStock] =useState(true)

function handleBtnClick(e){
  setisInStock((isInStock)=> !isInStock)
}

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick= {handleBtnClick} className="primary">In Stock</button>
      ) : (
        <button onClick= {handleBtnClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
