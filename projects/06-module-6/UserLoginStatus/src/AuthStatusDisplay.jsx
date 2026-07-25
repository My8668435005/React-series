// src/AuthStatusDisplay.js
import React from 'react';
import { useAuth } from './contexts/AuthContext';

function AuthStatusDisplay() {
  const { user } = useAuth(); // Consume the auth context

  return (
    <div>
      {user ? (
        <p>
          Welcome back, <strong>{user.name}</strong>! (Email: {user.email})
        </p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

export default AuthStatusDisplay;