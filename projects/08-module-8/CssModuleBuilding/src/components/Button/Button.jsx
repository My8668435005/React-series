import React from 'react';
import styles from './Button.module.css'; // Import the CSS module

function Button({ children, type = 'primary', disabled = false }) {
  // Construct the class name based on props
  const buttonClassName = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonClassName} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;