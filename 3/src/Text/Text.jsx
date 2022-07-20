import styled from "styled-components";

const TextElement = styled.span`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const Text = ({ children, size, weight, color }) => {
  return (
    <TextElement size={size} weight={weight} color={color}>
      {children}
    </TextElement>
  );
};

export default Text;
