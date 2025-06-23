'use client';
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <span className="text-white font-semibold">Sort by:</span>

        <button
          className={`px-3 py-1 rounded ${sortBy === 'name' ? 'bg-orange-400 text-white' : 'bg-orange-700'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`px-3 py-1 rounded ${sortBy === 'category' ? 'bg-orange-400 text-white' : 'bg-orange-700'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>

        <button className={`px-3 py-1 rounded ${sortBy === 'grouped' ? 'bg-orange-400 text-white' : 'bg-orange-700'}`}
          onClick={() => setSortBy('grouped')}
        >
          Grouped Category

        </button>
      </div>
      {sortBy !== 'grouped' ? (
        <ul className="space-y-2">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        <div>
          {Object.entries(
            itemsData.reduce((grouped, item) => {
              const cat = item.category;
              if (!grouped[cat]) grouped[cat] = [];
              grouped[cat].push(item);
              return grouped;
            }, {})
          )
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([category, items]) => (
              <div key={category} className="mb-4">
                <h2 className="text-xl font-bold capitalize mb-2">{category}</h2>
                <ul className="space-y-2">
                  {items
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(item => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      )}

    </div>
  );
}
