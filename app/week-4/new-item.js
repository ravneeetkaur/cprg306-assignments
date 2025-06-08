"use client";
import React, { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1); 

  const increase = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-amber-50 p-6 shadow-md w-60 h-20 mx-auto"> 
      <div className="flex justify-center items-center gap-4 mb-3">  
          <span className="text-amber-600 text-2xl font-semibold">{quantity}</span>
        <button
          onClick={decrease}
          className="bg-cyan-500 hover:bg-cyan-600 text-white w-8 semibold rounded-lg"
        > 
        - 
        </button>

        <button
          onClick={increase}
          className="bg-amber-400 hover:bg-amber-500 text-white w-8 semibold rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
