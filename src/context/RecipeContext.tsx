// src/context/RecipeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Recipe {
  id: number;
  title: string;
}

interface RecipeContextType {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, searchTerm, setSearchTerm }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};
