"use client";

export default function Item({ item, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#1A2238] rounded-lg p-5 m-3 shadow-lg hover:bg-[#24315C] hover:shadow-xl transition-all duration-200 cursor-pointer"
    >
      <h3 className="font-semibold text-[#F1F5F9] text-xl">{item.name}</h3>
      <p className="text-gray-400 mt-1">
        Buy {item.quantity} in {item.category}
      </p>
    </div>
  );
}
