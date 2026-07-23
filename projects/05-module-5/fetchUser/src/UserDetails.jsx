import React, { useState, useEffect } from 'react';

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure userId is valid before fetching
    if (!userId) {
      setLoading(false);
      setError(new Error('User ID is required.'));
      return;
    }

    console.log(`Fetching details for user ID: ${userId}`);
    setLoading(true); // Reset loading state when userId changes
    setError(null);   // Clear previous errors
    setUser(null);    // Clear previous user data

    // Use AbortController for cleanup, especially if userId can change rapidly
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal }) // Pass signal to fetch
      .then(response => {
        if (!response.ok) {
          // Throw an error for bad responses (4xx or 5xx)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        console.log('User data fetched successfully:', data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted for user ID:', userId);
          // This is expected if the component unmounts or userId changes before fetch completes.
          // We do not set an error state here as it's not a true error.
        } else {
          console.error('Error fetching user data:', err);
          setError(err); // Set the error state for actual fetch errors
        }
      })
      .finally(() => {
        // Only set loading to false if the fetch was not aborted due to unmount/dependency change.
        // A more robust check might be needed depending on exact logic.
        // For simplicity here, we assume if it's not AbortError, we are done loading.
        if (!signal.aborted) {
           setLoading(false);
        }
      });

    // Cleanup function: Abort the fetch request if it's still pending
    return () => {
      console.log('Cleaning up fetch for user ID:', userId);
      controller.abort(); // Abort the request
    };

    // Dependency array: Re-run the effect if userId changes.
  }, [userId]); // <-- userId is a dependency

  // Conditional rendering based on state
  if (loading) {
    return <p>Loading user details for ID {userId}...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    // This case might occur if loading is false and no error, but user is still null (e.g., invalid ID)
    return <p>No user found for ID {userId}.</p>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
}

export default UserDetails;