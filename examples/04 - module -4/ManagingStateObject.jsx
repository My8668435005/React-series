import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    age: 28,
    isSubscribed: false
  });

  const handleNameChange = (event) => {
    // Create a new object, copying existing properties and updating 'name'
    setUser({ ...user, name: event.target.value });
  };

  const handleAgeIncrease = () => {
    // Create a new object, copying existing properties and updating 'age'
    setUser({ ...user, age: user.age + 1 });
  };

  const toggleSubscription = () => {
    // Create a new object, copying existing properties and updating 'isSubscribed'
    setUser({ ...user, isSubscribed: !user.isSubscribed });
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Subscribed: {user.isSubscribed ? 'Yes' : 'No'}</p>

      <div>
        <label htmlFor='nameInput'>Edit Name: </label>
        <input
          id='nameInput'
          type='text'
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={handleAgeIncrease}>Increase Age</button>
      <button onClick={toggleSubscription}>
        {user.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
}

export default UserProfile;