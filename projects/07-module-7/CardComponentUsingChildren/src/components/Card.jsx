import React from 'react';

function Card(props) {
  // The 'children' prop contains whatever is placed between the opening and closing tags of the Card component
  const { children, title } = props;

  return (
    <div class='card'>
      {title && <h3 class='card-title'>{title}</h3>}
      <div class='card-content'>
        {children}
      </div>
    </div>
  );
}

export default Card;
