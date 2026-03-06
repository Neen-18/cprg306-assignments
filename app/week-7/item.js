export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 rounded">
      <h2 className="font-medium">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  )
}