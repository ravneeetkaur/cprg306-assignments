"use client";
import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
            <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex justify-between gap-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-inner"> 
                    <span className="text-gray-900 text-lg mr-2">{quantity}</span>
                    <button
                        type="button"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white w-8 semibold rounded-lg"
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => quantity < 20 && setQuantity(quantity + 1)}
                        className="bg-amber-400 hover:bg-amber-500 text-white w-8 semibold rounded-lg ml-2"
                    >
                        +
                    </button>
                </div>


                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="produce">Produce</option>
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
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
                +
            </button>
        </form>
    );
}
