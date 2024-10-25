// src/App.tsx
import React, { useContext } from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { RecipeProvider } from './context/RecipeContext';
import { AuthProvider, AuthContext } from './context/AuthContext';

const AppContent: React.FC = () => {
  const authContext = useContext(AuthContext); // Use useContext to access AuthContext

  if (!authContext) {
    return <p>Error: AuthContext is not available.</p>;
  }

  const { user, loading } = authContext;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Recipe Finder</h1>
        {user && <SignOut />} {/* Display SignOut button if user is logged in */}
      </header>
      <main className="p-4">
        {user ? (
          <>
            <RecipeSearch />
            <RecipeList />
          </>
        ) : (
          <SignIn /> /* Show SignIn component if user is not logged in */
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <AppContent />
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;
