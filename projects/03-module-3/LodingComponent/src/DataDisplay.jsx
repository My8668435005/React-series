import React, { useState, useEffect } from 'react';

function DataDisplay() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a network request delay
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        
        // Simulate success
        const fetchedData = { message: 'Data loaded successfully!' };
        setData(fetchedData);
        setIsLoading(false);
        
        // Uncomment below to simulate an error
        // throw new Error('Failed to fetch data');

      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after initial render

  // --- Conditional Rendering Logic --- 

  // 1. Show loading indicator if isLoading is true
  if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #eee', margin: '10px', borderRadius: '8px' }}>
        <p>Loading data... Please wait.</p>
        {/* You could render a spinner component here */}
      </div>
    );
  }

  // 2. Show error message if an error occurred
  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #f8d7da', backgroundColor: '#f8d7da', color: '#721c24', margin: '10px', borderRadius: '8px' }}>
        <h3>Error:</h3>
        <p>{error}</p>
      </div>
    );
  }

  // 3. Show data if loading is complete and no error occurred
  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #d4edda', backgroundColor: '#d4edda', color: '#155724', margin: '10px', borderRadius: '8px' }}>
      <h3>Data Loaded!</h3>
      <p>{data.message}</p>
    </div>
  );
}

export default DataDisplay;