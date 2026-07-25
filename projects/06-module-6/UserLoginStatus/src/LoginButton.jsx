// src/LoginButton.js
import React from 'react';
import { useAuth } from './contexts/AuthContext';

function LoginButton() {
  const { user, login, logout } = useAuth(); // Consume auth context

  const handleLogin = () => {
    // In a real app, you'd prompt for username/password and validate
    // For this example, we'll just pass a dummy username
    login({ username: 'Alice' });
  };

  return (
    <button
      onClick={user ? logout : handleLogin}
      className='auth-button'
      style={{ backgroundColor: user ? '#f44336' : '#4CAF50', color: 'white' }}
    >
      {user ? 'Logout' : 'Login'}
    </button>
  );
}

export default LoginButton;

