"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [mealsArray, setMealsArray] = useState(null);
  const [isError, setErrorStatus] = useState(true);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log("test", data);
      console.dir(data);
      setMealsArray(data.meals);
      setErrorStatus(false);
      return data;
    } catch (error) {
      setErrorStatus(true);
    }
  }

  useEffect(() => {
    fetchMealIdeas("chicken");
    console.dir(mealsArray);
    console.log("test", mealsArray);
  }, []);

  return (
    <div>
      <h1> Meal Ideas</h1>
      <h1> Here are some meal ideas using eggs:</h1>

      <div className="ml-8 p-2">
        <p>
          {mealsArray.map((item) => (
            <p>{item.strMeal}</p>
          ))}
        </p>
      </div>
    </div>
  );
}
