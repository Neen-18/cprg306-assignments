"use client";

import { useState } from "react";

const initialState = { name: '', quantity: 1, category: 'produce' };

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { ...item, id: crypto.randomUUID() };

    onAddItem(newItem);

    setItem(initialState);
  };

  const handleChange = (e) => {
      const { name, value, type } = e.target;
      setItem((prev) => ({
          ...prev,
          [name]: type === 'number' ? Number(value) : value
      }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Item</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
          placeholder="Enter item name"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={item.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-gray-600"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned foods">Canned Foods</option>
            <option value="dry goods">Dry Foods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 text-xl cursor-pointer"
      >
        +
      </button>
    </form>
  );
}