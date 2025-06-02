export default function Item({name, quantity, category}){
    return(
        <li className="bg-white text-gray-800 border-amber-400 p-4 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}