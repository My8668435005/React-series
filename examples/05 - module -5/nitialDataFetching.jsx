import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Effect running: Fetching user data...');
    // Simulate fetching user data based on userId
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log('User data fetched.');
      })
      .catch(error => console.error('Error fetching user:', error));

    // Empty dependency array: runs only once after mount
  }, []); // <-- Empty dependency array

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;