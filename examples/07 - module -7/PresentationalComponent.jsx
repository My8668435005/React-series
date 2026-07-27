// src/components/UserProfileCard.js
import React from 'react';

function UserProfileCard(props) {
  const { name, avatarUrl, bio } = props; // Destructuring props for clarity

  return (
    <div class='user-profile-card'>
      <img src={avatarUrl} alt={`${name}'s avatar`} class='avatar'></img>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfileCard;