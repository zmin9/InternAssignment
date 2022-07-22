import styled from "styled-components";

const MarginBox = styled.div`
  position: relative;
  margin: ${props => props.top || 0} 16px ${props => props.bottom || 0};
`;

const Wrapping = ({top, bottom, children}) => <MarginBox top={top} bottom={bottom}>{children}</MarginBox>;

export default Wrapping;