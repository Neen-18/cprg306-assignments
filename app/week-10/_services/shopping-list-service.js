import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const ref = collection (db, "users", userId, "items");
  const q = query(ref);  
  const docs = await getDocs(q);
  const items = [];
  docs.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
};

export const addItem = async (userId, item) => {
  const ref = collection(db, "users", userId, "items");
  const newItem = await addDoc(ref, item);
  return newItem.id;
}