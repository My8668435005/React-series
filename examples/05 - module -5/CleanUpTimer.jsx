import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer started.');
    // Set up an interval that increments seconds every second
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Return a cleanup function
    return () => {
      console.log('Timer stopped and cleaned up.');
      clearInterval(intervalId); // Clear the interval
    };

    // This effect runs once on mount and cleans up on unmount
  }, []);

  return (
    <div>
      <h3>Timer</h3>
      <p>Elapsed time: {seconds} seconds</p>
    </div>
  );
}

export default TimerComponent;

