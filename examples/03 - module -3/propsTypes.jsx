// src/components/UserProfile.js (with PropTypes)

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function UserProfile(props) {
  const { name, age } = props;

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

// Define prop types
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default UserProfile;


//If you try to render UserProfile without providing a name or age, or with the wrong type, React will show a warning in the console during development.