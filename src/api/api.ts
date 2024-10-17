// src/api.ts
import axios from 'axios';

const API_KEY = 'cd4fa856989c4af7ae299483e47944e2';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const fetchRecipes = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apiKey: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
