'use client';
import { useState } from 'react';
import itemsData from '../data/items.json';
import NewItem from './new-item';
import ItemList from './item-list';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
