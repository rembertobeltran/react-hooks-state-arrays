import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    filterBy === 'All' ? true : food.cuisine === filterBy;
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleCLick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleFilteredChange(event) {
    setFilterBy(event.target.value)
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      food.id === id ? {...food, heatLevel: food.heatLevel + 1} : food;
    });
    setFoods(newFoodArray);
  }

return (
  <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
);
  

export default SpicyFoodList;
