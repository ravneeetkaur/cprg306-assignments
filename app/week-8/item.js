'use client';
export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={() => onSelect(name)} className="bg-slate-950 text-white border-amber-400 p-2 shadow-md w-70 max-w-md ml-0 cursor-pointer">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}