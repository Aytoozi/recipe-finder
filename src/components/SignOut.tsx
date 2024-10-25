// src/components/SignOut.tsx
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // import your firebase config

const SignOut: React.FC = () => {
  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <button onClick={handleSignOut} className="p-2 bg-red-500 text-white rounded">
      Sign Out
    </button>
  );
};

export default SignOut;
