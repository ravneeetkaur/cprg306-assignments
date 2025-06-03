import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="p-4 min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
            <ItemList /> 
        </main>
    );
}