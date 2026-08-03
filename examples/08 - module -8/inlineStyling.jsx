import React from 'react';

function StyledComponent() {
  const buttonStyles = {
    backgroundColor: 'green',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  };

  return (
    <div>
      <p style={{ color: 'purple', fontStyle: 'italic' }}>
        This text has inline styles applied directly.
      </p>
      <button style={buttonStyles}>
        Styled Button
      </button>
    </div>
  );
}

export default StyledComponent;