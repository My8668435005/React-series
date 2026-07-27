// src/containers/UserProfileContainer.js
import React, { useState, useEffect } from 'react';
import UserProfileCard from '../components/UserProfileCard';

function UserProfileContainer({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUser = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call:
        // const response = await fetch(`/api/users/${userId}`);
        // const data = await response.json();
        const data = {
          id: null,
          name: 'Alice Smith',
          avatarUrl: 'https://via.placeholder.com/150',
          bio: 'Passionate about frontend development and building great user experiences.'
        };
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Re-fetch if userId changes

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error loading profile: {error.message}</p>;
  }

  if (!user) {
    return null; // Or some other placeholder
  }

  // Render the presentational component, passing data via props
  return (
    <UserProfileCard
      name={user.name}
      avatarUrl={user.avatarUrl}
      bio={user.bio}
    />
  );
}

export default UserProfileContainer;