import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get all items for a specific user
export const getItems = async (userId) => {
  const items = [];
  const itemsCollectionRef = collection(db, `users/${userId}/items`);
  const q = query(itemsCollectionRef);

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.error("Error in getItems: ", error);
    throw new Error("Could not fetch items."); // Or handle it as you see fit
  }
};

// Function to add a new item for a specific user
export const addItem = async (userId, item) => {
  const itemsCollectionRef = collection(db, `users/${userId}/items`);

  try {
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
    throw new Error("Could not add item."); // Or handle it as you see fit
  }
};