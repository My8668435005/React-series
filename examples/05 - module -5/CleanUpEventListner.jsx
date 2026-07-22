import React, { useState, useEffect } from 'react';

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    console.log('Scroll tracker effect mounted.');

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log('Scrolled to:', window.scrollY);
    };

    // Add event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: Remove the event listener
    return () => {
      console.log('Scroll tracker effect cleaning up.');
      window.removeEventListener('scroll', handleScroll);
    };

    // Empty dependency array: runs once on mount, cleans up on unmount.
  }, []);

  return (
    <div style={{ height: '2000px', background: '#f0f0f0', padding: '20px' }}>
      <h3>Scroll Tracker</h3>
      <p>Current scroll position: {scrollPosition}px</p>
      <p>Scroll down to see the position update.</p>
    </div>
  );
}

export default ScrollTracker;