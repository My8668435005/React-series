// src/components/Accordion.js
import React, { useState, createContext, useContext } from 'react';

// Context to share state and functions
const AccordionContext = createContext();

function Accordion(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Provide the state and toggle function to children via context
  const value = { openIndex, toggleItem };

  return (
    <AccordionContext.Provider value={value}>
      <div class='accordion'>{props.children}</div>
    </AccordionContext.Provider>
  );
}

// Static property for Accordion.Item
function Item({ children, index }) {
  const { openIndex, toggleItem } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div class={`accordion-item ${isOpen ? 'open' : ''}`} onClick={() => toggleItem(index)}>
      {children}
    </div>
  );
}

// Static property for Accordion.Header
function Header({ children }) {
  return <div class='accordion-header'>{children}</div>;
}

// Static property for Accordion.Content
function Content({ children }) {
  const { openIndex } = useContext(AccordionContext); // Need context to know if it's open
  // Note: In a real scenario, the parent would conditionally render this based on openIndex
  // For simplicity here, we'll assume the parent controls rendering or uses CSS.
  // A more robust implementation would pass 'isOpen' down or conditionally render.
  return <div class='accordion-content'>{children}</div>;
}

// Attach child components as static properties
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;