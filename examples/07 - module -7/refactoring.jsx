// src/components/UserInfoDisplay.js
import React from 'react';
import PropTypes from 'prop-types';

function UserInfoDisplay({ name, email, role }) {
  return (
    <div class='user-info-display'>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {role && <p>Role: {role}</p>}
    </div>
  );
}

UserInfoDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default UserInfoDisplay;


// src/App.js
import React from 'react';
import UserInfoDisplay from './components/UserInfoDisplay';
import './App.css';

function App() {
  const user1 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Developer',
  };

  const user2 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Designer',
  };

  const user3 = {
    name: 'Admin User',
    email: 'admin@example.com',
  };

  return (
    <div className='App'>
      <h1>User Information (Refactored)</h1>

      <h2>User 1:</h2>
      <UserInfoDisplay name={user1.name} email={user1.email} role={user1.role} />

      <h2>User 2:</h2>
      <UserInfoDisplay name={user2.name} email={user2.email} role={user2.role} />

      <h2>User 3 (No Role):</h2>
      <UserInfoDisplay name={user3.name} email={user3.email} />
    </div>
  );
}

export default App;

