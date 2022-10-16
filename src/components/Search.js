import React, { useState } from "react";
import PlantList from "./PlantList";

function Search({onSearching}) {
  const[search,setSearch]= useState("");

  function handleChange(e){
    setSearch(e.target.value)
    onSearching(search.toLowerCase());
  }
 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value = {search}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
