import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Effect running: Fetching user data for ID ${userId}...`);
    setLoading(true); // Reset loading state when userId changes
    setError(null);

    fetch(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        console.log('User data fetched.');
      })
      .catch(err => {
        setError(err);
        console.error('Error fetching user:', err);
      })
      .finally(() => {
        setLoading(false);
      });

    // Dependency array includes 'userId'. Effect re-runs if userId changes.
  }, [userId]); // <-- Dependency array with 'userId'

  if (loading) {
    return <p>Loading user profile for ID {userId}...</p>;
  }

  if (error) {
    return <p>Error fetching user: {error.message}</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;