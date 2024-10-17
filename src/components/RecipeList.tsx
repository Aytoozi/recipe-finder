// src/components/RecipeList.tsx
import React from 'react';
import { useRecipeContext } from '../context/RecipeContext';
import useFetchRecipes, { Recipe } from '../hooks/useFetchRecipes';

const RecipeList: React.FC = () => {
  const { searchTerm } = useRecipeContext();
  const { recipes, loading, error } = useFetchRecipes(searchTerm);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (recipes.length === 0) {
    return <p className="text-center text-gray-500">No recipes found. Try searching!</p>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe: Recipe) => (
        <div key={recipe.id} className="p-4 border rounded-lg bg-white shadow">
          <h2 className="text-xl font-semibold">{recipe.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
