import styled from "styled-components";

const Text = styled.span`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight || 1};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

// const Text = ({ children, size, weight, color, lineHeight }) => {
//   return (
//     <TextElement size={size} weight={weight} color={color} lineHeight={lineHeight}>
//       {children}
//     </TextElement>
//   );
// };

export default Text;
