import React, { useState, useEffect } from 'react';

function SimpleTimer() {
  const [count, setCount] = useState(0);

   useEffect(() => {
    console.log('Timer effect started.');

    // Set up the interval
    const intervalId = setInterval(() => {
      // Use the functional update form of setCount to ensure we always get the latest state
      setCount(prevCount => prevCount + 1);
      console.log('Tick...');
    }, 1000); // Increment every 1000ms (1 second)

    // Return the cleanup function
    return () => {
      console.log('Timer effect cleaning up.');
      clearInterval(intervalId); // Clear the interval when the component unmounts or re-renders
    };

    // Empty dependency array: runs once on mount, cleans up on unmount.
  }, []);

  return (
    <div>
      <h3>Simple Timer</h3>
      <p>Elapsed Time: {count} seconds</p>
    </div>
  );
}

export default SimpleTimer;