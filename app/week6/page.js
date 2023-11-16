"use client";
import { useState } from "react";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-event";
import itemData from "./item.json";


export default function Page() {
  const [itemList, setItemList] = useState(
    itemData.map((item) => ({ ...item }))
  );
  console.dir(itemList);


  const handleCreateItem = (item) => {
    setItemList([...itemList, item]);
    console.dir(itemList);
  };



    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <NewItem onCreateItem={handleCreateItem}/>
        <ItemList itemList={itemList}/>   
      </main>
    );
  }