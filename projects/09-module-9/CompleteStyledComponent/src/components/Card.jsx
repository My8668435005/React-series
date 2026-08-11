import styled, { css } from 'styled-components';

// Base styles for the card container
const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing.small};
  padding: ${props => props.theme.spacing.medium};
  margin: ${props => props.theme.spacing.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  width: 300px; /* Fixed width for demonstration */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Highlight variation */
  ${props => props.highlighted && css`
    border-left: 5px solid ${props.theme.colors.primary};
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.1);
  `}
`;

// Styled component for the card title
const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.darkGray};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5em;
`;

// Styled component for the card content
const CardContent = styled.p`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.body};
  font-size: 1em;
  line-height: 1.6;
`;

// Styled component for the card footer
const CardFooter = styled.div`
  margin-top: ${props => props.theme.spacing.medium};
  padding-top: ${props => props.theme.spacing.medium};
  border-top: 1px solid ${props => props.theme.colors.border};
  font-size: 0.9em;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.body};
`;

// The main Card component that uses the styled elements
const Card = ({ title, content, footer, highlighted, ...props }) => {
  return (
    <CardContainer highlighted={highlighted} {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;