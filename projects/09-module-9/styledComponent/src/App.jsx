import React from 'react';
import styled from 'styled-components';
import StyledButton from './components/Button'; // Assuming Button.js is in src/components
import StyledButton from './components/Button';
import StyledInput from './components/Input';



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <h2>Styled Component Examples</h2>
      <StyledButton>Click Me</StyledButton>
      <StyledButton disabled>Cannot Click</StyledButton>

      <h3>Form Elements</h3>
      <StyledInput type='text' placeholder='Enter your name' />
      <StyledInput type='email' placeholder='Enter your email' />
    </AppContainer>
  );
}

export default App;