import styled, { css } from 'styled-components';

// Base styles for all buttons
const buttonStyles = css`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, padding 0.3s ease, font-size 0.3s ease;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.darkGray};
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.lightGray};
    filter: none;
  }
`;

// Define variations using theme colors
const primaryStyles = css`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.primary};
`;

const secondaryStyles = css`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.secondary};
`;

const dangerStyles = css`
  background-color: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.danger};
`;

// Size variations (can also use theme.spacing)
const sizeStyles = css`
  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          padding: ${props.theme.spacing.medium} ${props.theme.spacing.large};
          font-size: 1.1em;
        `;
      case 'small':
        return css`
          padding: ${props.theme.spacing.small} ${props.theme.spacing.medium};
          font-size: 0.9em;
        `;
      case 'medium':
      default:
        return css`
          padding: ${props.theme.spacing.medium};
          font-size: 1em;
        `;
    }
  }}
`;

// Base StyledButton component
const StyledButton = styled.button`
  ${buttonStyles}
  ${sizeStyles}

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

// OutlinedButton extends StyledButton
const OutlinedButton = styled(StyledButton)`
  background-color: transparent;
  border-width: 2px;

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return css`
          color: ${props.theme.colors.secondary};
          border-color: ${props.theme.colors.secondary};
          &:hover {
            background-color: ${props.theme.colors.secondary};
            color: ${props.theme.colors.white};
            filter: none;
          }
        `;
      case 'danger':
        return css`
          color: ${props.theme.colors.danger};
          border-color: ${props.theme.colors.danger};
          &:hover {
            background-color: ${props.theme.colors.danger};
            color: ${props.theme.colors.white};
            filter: none;
          }
        `;
      case 'primary':
      default:
        return css`
          color: ${props.theme.colors.primary};
          border-color: ${props.theme.colors.primary};
          &:hover {
            background-color: ${props.theme.colors.primary};
            color: ${props.theme.colors.white};
            filter: none;
          }
        `;
    }
  }}

  &:disabled {
    background-color: transparent;
    color: ${props => props.theme.colors.lightGray};
    border-color: ${props => props.theme.colors.lightGray};
    filter: none;
  }
`;

export { StyledButton, OutlinedButton };