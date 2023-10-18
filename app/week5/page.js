import React from "react";
import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ItemList/>   
      </main>
    );
  }