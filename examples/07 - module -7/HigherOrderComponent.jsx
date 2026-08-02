// src/hoc/withLogger.js
import React, { useEffect } from 'react';

function withLogger(WrappedComponent) {
  // Return a new component
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name || 'Unnamed'} mounted or updated.`);
      // In a real app, you might log specific props or state changes
    });

    // Render the original component, passing down all props
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;


// src/components/UserProfile.js (A regular component)
import React from 'react';

function UserProfile({ name }) {
  return <p>Hello, {name}!</p>;
}

export default UserProfile;

// src/App.js (using the HOC)
import React from 'react';
import UserProfile from './components/UserProfile';
import withLogger from './hoc/withLogger';
import './App.css';

// Create an enhanced component by applying the HOC
const LoggedInUserProfile = withLogger(UserProfile);

function App() {
  return (
    <div className='App'>
      <h1>Using HOC</h1>
      <LoggedInUserProfile name='Alice' />
    </div>
  );
}

export default App;