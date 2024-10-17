// src/hooks/useFetchRecipes.ts
import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/api';

export interface Recipe {
  id: number;
  title: string;
}

const useFetchRecipes = (searchTerm: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRecipes(searchTerm);
        setRecipes(data);
      } catch (err) {
        setError('Error fetching recipes');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { recipes, loading, error };
};

export default useFetchRecipes;
