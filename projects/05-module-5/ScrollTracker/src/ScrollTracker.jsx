import React, { useState, useEffect } from 'react';

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    console.log('Scroll tracker effect mounted.');

    // Define the event handler function
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log('Scrolled to:', window.scrollY);
    };

    // Add the event listener to the window object
    window.addEventListener('scroll', handleScroll);

    // Return the cleanup function
    return () => {
      console.log('Scroll tracker effect cleaning up.');
      // Remove the event listener to prevent memory leaks
      window.removeEventListener('scroll', handleScroll);
    };

    // Empty dependency array: runs once on mount, cleans up on unmount.
  }, []);

  // Add some styling to make the page scrollable for testing
  const scrollableStyle = {
    height: '2000px', // Make the page tall enough to scroll
    background: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={scrollableStyle}>
      <h3>Scroll Tracker</h3>
      <p>Current Scroll Position: {scrollPosition}px</p>
      <p>Scroll down the page to see the value update.</p>
      <div style={{ marginTop: '1800px' }}>
        <p>Bottom of the scrollable area.</p>
      </div>
    </div>
  );
}

export default ScrollTracker;

