import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, title, children }) {
  // Do not render the modal if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.overlay} ${styles.visible}`}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          {children}
        </div>
        {/* Optional: Footer for buttons like 'Save' or 'Cancel' */}
        {/* You could pass footer content as a prop or children */}
        {/* For simplicity, we'll omit a dedicated footer prop here */}
      </div>
    </div>
  );
}

export default Modal;
