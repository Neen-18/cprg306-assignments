'use client';

import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
	try {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
		return await response.json();
	} catch (error) {
		console.error('Error fetching meal ideas:', error);
		return [];
	}
};

export default function MealIdeas({ ingredient }) {
	const [meals, setMeals] = useState([]);

	const loadMealIdeas = async () => {
		const mealIdeas = await fetchMealIdeas(ingredient);
		setMeals(mealIdeas.meals);
	};

	useEffect(() => {
		loadMealIdeas();
	}, [ingredient]);

	return (
		<div>
			<h3 className='text-lg font-semibold mb-2'>Meal Ideas {ingredient ? `for "${ingredient}"` : '(selected an item)'}</h3>
			<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
				{meals ? (
					meals.map((meal) => (
						<li className='border rounded p-2' key={meal.idMeal}>
							<p className='font-medium'>{meal.strMeal}</p>
						</li>
					))
				) : (
					<p className='text-sm text-gray-500'>No meals found.</p>
				)}
			</ul>
		</div>
	);
}
