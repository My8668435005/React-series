import React from 'react';
import Card from './components/Card';
import './App.css'; // Assuming you have some basic CSS for Card

function App() {
  return (
    <div className='App'>
      <h1>Using the Reusable Card Component</h1>

      <Card title='User Profile'>
        <p>This is the content of the first card.</p>
        <img src='https://via.placeholder.com/100' alt='Placeholder Image' />
      </Card>

      <Card title='Product Details'>
        <ul>
          <li>Product Name: Gadget Pro</li>
          <li>Price: $199.99</li>
        </ul>
      </Card>

      <Card> {/* Card without a title */}
        <p>This card has no title, demonstrating flexibility.</p>
      </Card>
    </div>
  );
}

export default App;