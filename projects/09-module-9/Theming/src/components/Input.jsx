import styled from 'styled-components';

const StyledInput = styled.input`
  padding: ${props => props.theme.spacing.medium}  ${props => props.theme.spacing.large};
  margin: 5px;
  font-size: 1em;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: ${props => props.theme.fonts.body};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export default StyledInput;