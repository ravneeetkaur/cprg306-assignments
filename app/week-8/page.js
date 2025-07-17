'use client';

import { useState } from 'react';
import itemsData from '../data/items.json';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; 

function cleanItemName(rawName) {
  const noEmoji = rawName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDFFF]|[\u2600-\u26FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEFF])/g, '');
  return noEmoji.split(',')[0].trim().toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); 

  
  const handleItemSelect = (item) => {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="lg:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
