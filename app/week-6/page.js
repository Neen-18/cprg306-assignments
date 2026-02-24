"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }


  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  )
}