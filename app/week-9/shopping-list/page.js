"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import initialItems from "./items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  const [shoppingItems, setShoppingItems] = useState(initialItems);
  const [chosenItem, setChosenItem] = useState("");

  const addItemHandler = (item) => {
    setShoppingItems((prev) => [...prev, item]);
  };

  const formatItemName = (name) => {
    let cleaned = name.split(",")[0].trim();
    cleaned = cleaned.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
      ""
    ).trim();
    return cleaned;
  };

  const selectItemHandler = (item) => {
    setChosenItem(formatItemName(item.name));
  };

  if (!user) {
    return <p className="text-white p-4">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-[#0A122A] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <section className="md:w-1/2 bg-[#131E3A] p-6 rounded-lg shadow-lg">
          <NewItem onAddItem={addItemHandler} />
          <div className="mt-8">
            <ItemList items={shoppingItems} onItemSelect={selectItemHandler} />
          </div>
        </section>

        <section className="md:w-1/2">
          <MealIdeas ingredient={chosenItem} />
        </section>
      </div>
    </main>
  );
}
