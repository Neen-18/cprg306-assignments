export default function Item({ name, quantity, category, onSelect }) {
	return (
		<li className='border p-2 rounded cursor-pointer hover:bg-gray-500' onClick={onSelect}>
			<h2 className='font-medium'>{name}</h2>
			<p>Quantity: {quantity}</p>
			<p>Category: {category}</p>
		</li>
	);
}
