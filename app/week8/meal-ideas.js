"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient} ) {
  const [mealsArray, setMealsArray] = useState([]);
  const [isError, setErrorStatus] = useState(true);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log("test", data);
      console.dir(data.meals);
      setMealsArray(data.meals);
      setErrorStatus(false);
      // return data;
    } catch (error) {
      setErrorStatus(true);
    }
  }

  useEffect(() => {
    fetchMealIdeas(ingredient);

    // console.log("test", mealsArray);
  }, [ingredient]);

    console.dir(mealsArray);

  return (
    <div>
      <h1> Meal Ideas</h1>
      <h1> Here are some meal ideas using {ingredient}:</h1>

      <div className="ml-8 p-2">
        <ul>
          { mealsArray?(   mealsArray.map((item) => (
              <li class="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">{item.strMeal}</li>
            ))): (
              <p>No meals available</p>
          )}
        </ul>
      </div>
    </div>
  );
}
