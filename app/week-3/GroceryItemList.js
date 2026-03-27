import GroceryItem from "./GroceryItem";

export default function GroceryItemList() {

  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
  
  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
  
  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
  
  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
  
  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
  
  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
  
  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned foods",
  };
  
  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
  
  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
  
  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
  
  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
  
  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <ul className="space-y-2">      
      <GroceryItem {...item1} />
      <GroceryItem {...item2} />
      <GroceryItem {...item3} />
      <GroceryItem {...item4} />
      <GroceryItem {...item5} />
      <GroceryItem {...item6} />
      <GroceryItem {...item7} />
      <GroceryItem {...item8} />
      <GroceryItem {...item9} />
      <GroceryItem {...item10} />
      <GroceryItem {...item11} />
      <GroceryItem {...item12} />
    </ul>
  );
}