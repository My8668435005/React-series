import styled from 'styled-components';

const StyledButton = styled.button`
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

  /* Default button style (can be overridden by variations) */
  background-color: #007bff;
  color: white;
  border-color: #007bff;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  &:active {
    background-color: #004085;
    border-color: #004085;
  }

  /* Disabled state */
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    border-color: #cccccc;
  }
`;

export default StyledButton;