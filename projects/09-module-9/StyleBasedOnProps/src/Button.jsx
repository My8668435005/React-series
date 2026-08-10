import styled, { css } from 'styled-components';

// Helper function to define button variations
const buttonStyles = css`
  /* Base styles for all buttons */
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    filter: brightness(90%); /* General hover effect */
  }

  &:active {
    filter: brightness(80%); /* General active effect */
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    border-color: #cccccc;
    filter: none; /* Remove brightness effect for disabled */
  }
`;

// Define variations based on props
const primaryStyles = css`
  background-color: #007bff;
  color: white;
  border-color: #007bff;
`;

const secondaryStyles = css`
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
`;

const dangerStyles = css`
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
`;

const StyledButton = styled.button`
  ${buttonStyles}

  /* Apply specific styles based on the 'variant' prop */
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return secondaryStyles;
      case 'danger':
        return dangerStyles;
      case 'primary':
      default:
        return primaryStyles;
    }
  }}
`;

export default StyledButton;