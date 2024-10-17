// src/App.tsx
import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import { RecipeProvider } from './context/RecipeContext';

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">Recipe Finder</h1>
        </header>
        <main className="p-4">
          <RecipeSearch />
          <RecipeList />
        </main>
      </div>
    </RecipeProvider>
  );
};

export default App;
