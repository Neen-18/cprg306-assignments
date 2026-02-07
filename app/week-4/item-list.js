import Item from "./item";
import items from "./items";

export default function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}