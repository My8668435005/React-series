
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import './App.css';

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);

  const handleNextUser = () => {
    setCurrentUserId(prevId => prevId + 1);
  };

  const handlePreviousUser = () => {
    setCurrentUserId(prevId => Math.max(1, prevId - 1)); // Ensure ID does not go below 1
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>User Details Fetcher</h1>
      </header>
      <main>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={handlePreviousUser} disabled={currentUserId === 1}>Previous User</button>
          <span style={{ margin: '0 10px' }}>User ID: {currentUserId}</span>
          <button onClick={handleNextUser}>Next User</button>
        </div>
        <UserDetails userId={currentUserId} />
      </main>
    </div>
  );
}

export default App;