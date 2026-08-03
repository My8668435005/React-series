import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='container'>
      <h1>CSS Modules Example</h1>
      <Button type='primary'>Primary Action</Button>
      <Button type='secondary'>Secondary Action</Button>
      <Button type='primary' disabled>Disabled Button</Button>
    </div>
  );
}

export default App;
