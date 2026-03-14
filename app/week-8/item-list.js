'use client';

import Item from './item';
import { useState } from 'react';

export default function ItemList({ items, onItemSelect }) {
	const [sortBy, setSortBy] = useState('name');

	function compareBy(a, b) {
		if (a[sortBy] < b[sortBy]) return -1;
		if (a[sortBy] > b[sortBy]) return 1;
		return 0;
	}

	const sortedItems = [...items].sort(compareBy);

	return (
		<section className='space-y-4'>
			<div className='flex gap-2 py-1 justify-center'>
				<button
					onClick={() => setSortBy('name')}
					className={`px-4 py-2 rounded-md font-medium border ${sortBy === 'name' ? 'bg-white text-black' : 'bg-black text-white'}`}
				>
					{' '}
					Sort By Name
				</button>
				<button
					onClick={() => setSortBy('category')}
					className={`px-4 py-2 rounded-md font-medium border ${sortBy === 'category' ? 'bg-white text-black' : 'bg-black text-white'}`}
				>
					{' '}
					Sort By Category
				</button>
			</div>

			<ul className='space-y-2'>
				{sortedItems.map((item) => (
					<Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />
				))}
			</ul>
		</section>
	);
}
