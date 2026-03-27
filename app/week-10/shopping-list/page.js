'use client';

import ItemList from './item-list';
import NewItem from './NewItem';
import { useState, useEffect } from 'react';
import MealIdeas from './MealIdeas';
import { useUserAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
	const { user } = useUserAuth();
	const router = useRouter();
	const [items, setItems] = useState([]);
	const [selectedItemName, setSelectedItemName] = useState(null);

	useEffect(() => {
		if (!user) {
			router.push('/week-9');
		}
	}, [user, router]);

	if (!user) {
		return null;
	}

	const loadItems = async () => {
		const items = await getItems(user.uid);
		setItems(items);
	};

	useEffect(() => {
		loadItems();
	}, [user]);

	const handleAddItem = async (newItem) => {
		const id = await addItem(user.uid, newItem);
		setItems((prev) => [...prev, { ...newItem, id }]);
	};

	const handleItemSelect = (item) => {
		const cleanItemName = item.name
			.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
			.split(',')[0]
			.trim();
		console.log(cleanItemName);
		setSelectedItemName(cleanItemName);
	};

	return (
		<main className='p-4 max-w-5xl mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Shopping List + Meal Ideas</h1>
			<div className='grid md:grid-cols-2 gap-6'>
				<div className='space-y-4'>
					<NewItem onAddItem={handleAddItem} />
					<ItemList items={items} onItemSelect={handleItemSelect} />
				</div>
				<MealIdeas ingredient={selectedItemName} />
			</div>
		</main>
	);
}
