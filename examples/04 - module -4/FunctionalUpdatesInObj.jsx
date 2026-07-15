import React, { useState } from 'react';

function UserProfileFunctional() {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    age: 28
  });

  const handleAgeIncrease = () => {
    // Use functional update to ensure age is incremented based on the latest value
    setUser(prevUser => ({
      ...prevUser, // Copy existing properties
      age: prevUser.age + 1 // Update age based on previous age
    }));
  };

  // ... other handlers and return statement ...

  return (
    <div>
      <h3>User Profile (Functional Update)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleAgeIncrease}>Increase Age</button>
    </div>
  );
}

export default UserProfileFunctional;