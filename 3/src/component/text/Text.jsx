import styled from 'styled-components';

const Text = styled.span`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight || 1};
`;

export default Text;
