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
  console.log("test",itemList)

  const handleCreateItem = (item) => {
    setItemList([...itemList, item]);
    console.log("test",itemList)
  };
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewItem onCreateItem={handleCreateItem}/>
      <div class="flex gap-4">
      <ItemList itemList={itemList}/>   
      <MealIdeas ingredient={"chicken"}/>
      </div>
    
    </main>

    );
  }