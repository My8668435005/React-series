import React from 'react';
import styled from 'styled-components';
import { StyledButton, OutlinedButton } from './components/Button';
import StyledInput from './components/Input';
import Card from './components/Card'; // Import the Card component

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.body};
  padding: ${props => props.theme.spacing.medium};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.large};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <h2>Styled Component Examples</h2>
      <h3>Solid Buttons</h3>
      <ButtonGroup>
        <StyledButton variant='primary' size='medium'>Medium Primary</StyledButton>
        <StyledButton variant='secondary' size='large'>Large Secondary</StyledButton>
        <StyledButton variant='danger' size='small'>Small Danger</StyledButton>
        <StyledButton size='medium'>Default Size</StyledButton>
        <StyledButton disabled size='large'>Disabled Large</StyledButton>
      </ButtonGroup>

      <h3>Outlined Buttons (Extended)</h3>
      <ButtonGroup>
        <OutlinedButton variant='primary' size='medium'>Medium Primary</OutlinedButton>
        <OutlinedButton variant='secondary' size='large'>Large Secondary</OutlinedButton>
        <OutlinedButton variant='danger' size='small'>Small Danger</OutlinedButton>
        <OutlinedButton size='medium'>Default Outlined</OutlinedButton>
        <OutlinedButton disabled size='large'>Disabled Outlined</OutlinedButton>
      </ButtonGroup>

      <h3>Form Elements</h3>
      <StyledInput type='text' placeholder='Enter your name' />
      <StyledInput type='email' placeholder='Enter your email' />

      <h3>Card Components</h3>
      <CardGrid>
        <Card
          title='Welcome Card'
          content='This is a basic card component styled with Styled Components. It uses theme values for consistent styling.'
          footer='Learn more...'
        />
        <Card
          title='Highlighted Feature'
          content='This card is highlighted to draw attention to important information or features.'
          footer='Action required'
          highlighted
        />
        <Card
          title='Another Card'
          content='Cards are versatile for displaying information in a structured way.'
        />
      </CardGrid>
    </AppContainer>
  );
}

export default App;