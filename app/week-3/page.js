import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="p-4 min-h-screen bg-amber-50 text-white">
            <h1 className="text-2xl font-bold mb-4 text-amber-600">Shopping List</h1>
            <ItemList /> 
        </main>
    );
}