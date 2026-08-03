import React from 'react';
import styles from './Card.module.css'; // Import the CSS module

function Card({ title, children, theme = 'primary' }) {
  // Dynamically construct the class name based on theme prop
  // We combine the base 'card' class with the theme-specific class
  const cardClassName = `${styles.card} ${styles[theme]}`;

  return (
    <div className={cardClassName}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default Card;