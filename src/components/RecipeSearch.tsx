// src/components/RecipeSearch.tsx
import React, { useState } from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import useFetchRecipes from '../hooks/useFetchRecipes';

const RecipeSearch: React.FC = () => {
  const { setSearchTerm } = useRecipeContext();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a recipe..."
        className="p-2 border rounded-md"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default RecipeSearch;
