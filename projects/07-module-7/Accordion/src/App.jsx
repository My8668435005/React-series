import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Accordion>
        <Accordion.Item index={0}>
          <Accordion.Header>Section 1</Accordion.Header>
          <Accordion.Content>Content for section 1.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item index={1}>
          <Accordion.Header>Section 2</Accordion.Header>
          <Accordion.Content>Content for section 2.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;