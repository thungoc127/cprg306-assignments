"use client";
import { useState } from "react";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-event";
import itemData from "./item.json";
import MealIdeas from "./meal-ideas"
import { Chicle } from "next/font/google";

export default function Page() {
  const [itemList, setItemList] = useState(
    itemData.map((item) => ({ ...item }))
  );
  const [ingredient, setIngredient] = useState("");

  const handleCreateItem = (item) => {
    setItemList([...itemList, item]);
    console.log("test7",itemList)
  };
  const handleSetIngredientName = (ingredient) => {
    // splice emoji from ingredient name
    // const name = ingredient.split(/,|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼/);
    ingredient= ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    setIngredient(ingredient);
  };
  console.log("test7",ingredient)

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewItem onCreateItem={handleCreateItem}/>
      <div class="flex gap-4">
      <ItemList itemList={itemList} handleSetIngredient={handleSetIngredientName} />   
      <MealIdeas ingredient={ingredient}/>
      </div>
    
    </main>

    );
  }