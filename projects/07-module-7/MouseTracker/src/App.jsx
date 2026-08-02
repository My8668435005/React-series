import React from 'react';
import MouseTracker from './components/MouseTracker';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Track Mouse Position</h1>
      <MouseTracker
        render={({ x, y }) => ( // The render prop function receives the position
          <p>The current mouse position is ({x}, {y})</p>
        )}
      />
    </div>
  );
}

export default App;