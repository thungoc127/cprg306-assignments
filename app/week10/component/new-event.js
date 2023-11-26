"use client";
import { useState } from "react";
import Item from "./item";

export default function NewItem({ onCreateItem }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      // "id": "",
      "name": name,
      "quantity": count,
      "category": category
    };

    onCreateItem(newItem);


    alert("Name: " + name + "\n" + "Quantity: "+ count+ "\n" + "Category:" +category)
    setName("");
    setCount(0);


  };

  const handleSetCategory=(event)=>{
    setCategory(event.target.value)
  }
  
  const handleSetQuantity = (event) => {
    setCount(parseInt(event.target.value));
  };



  const handleNameChange = (event) => {
    setName(event.target.value);
  };



  return (
    <main>
      <form  onSubmit={
        handleSubmit    
    } class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
        <div class="mb-2">
          <input
            type="text"
            placeholder="Item name"
            required
            class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={name}
            onChange={handleNameChange}
            />
        </div>

        <div class="flex justify-between">
          <input
            type="number"
            min="0"
            max="99"
            required
            class="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value= {count}
            onChange={handleSetQuantity}
          />

          <select onChange={handleSetCategory}  class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
            <option value="" disabled>
              Category
            </option>
            
            <option value={category}  selected>
              Produce
            </option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            
          </select>
        </div>
        <button
          onClick={ handleSubmit }
          type="submit"
          class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
            +
        </button>
      </form>
    </main>
    
  );
}
