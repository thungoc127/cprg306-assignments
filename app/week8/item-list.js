"use client";
import { useState } from "react";
import React from "react";
import Item from "./item";
import itemData from "./item.json";

export default function ItemList({ itemList, handleSetIngredient }) {

  let displayList = [];

  const [sortBy, setSortBy] = useState(1);

  let itemArray = itemData.map((item) => ({ ...item }));

  if (sortBy === 1) {
    displayList = itemList.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 2) {
    displayList = itemList.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortBy === 3) {
    displayList = itemList.sort((a, b) => a.category.localeCompare(b.category));
  }
  const onNameClicked = () => {
    setSortBy(1);
  };
  const onCategoryClicked = () => {
    setSortBy(2);
  };
  const onGroupedCategoryClicked = () => {
    setSortBy(3);
  };
  const handleFilterByName = () => {
    displayList = itemArray.map();
  };

  return (
    <>
      <div>
        <label for="sort">Sort by: </label>
        <button onClick={onNameClicked} class="bg-orange-500 p-1 m-2 w-28">
          Name{" "}
        </button>
        <button onClick={onCategoryClicked} class="bg-orange-700 p-1 m-2 w-28">
          Category
        </button>
        <h1 className="text-sky-500 dark:text-sky-400" title="SHOPPING LIST"></h1>
      <ul className="space-y-6">
        <div>
          {displayList.map((item) => (
            <Item
              handleSetIngredient={handleSetIngredient}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </div>
      </ul>
      </div>

      
    </>
  );
}
