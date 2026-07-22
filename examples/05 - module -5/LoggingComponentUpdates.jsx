import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running: Component updated!');
    // This will log every time 'count' changes or the component re-renders for any reason.

    // Example: Updating the document title after every render
    document.title = `You clicked ${count} times`;

    // No dependency array means it runs after every render.
  }); // <-- NO dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;