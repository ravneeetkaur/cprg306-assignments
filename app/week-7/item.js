'use client';
export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-slate-950 text-white border-amber-400 p-2 shadow-md w-70 max-w-md ml-0">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}