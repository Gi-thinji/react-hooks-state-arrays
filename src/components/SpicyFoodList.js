import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selectedOption,setSelectedOption] = useState("All")
  // const []
  // const foodArr = [...spicyFoods]
  // console.log(foods)
  // foodArr.map((food)=>{console.log(food))
  const foodsToDisplay = foods.filter((food) => {
    if (selectedOption === "All") {
      return true;
    } else {
      return food.cuisine === selectedOption;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

 function handleClick(id){
  const newFoodArray = foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  });
  setFoods(newFoodArray);
}

  function handleSelect(value){
    setSelectedOption(value)
  }
  

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter"  onChange={(e)=>handleSelect(e.target.value) } >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
