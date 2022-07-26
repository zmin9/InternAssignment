import styled from "styled-components";

const PaddingBox = styled.div`
  padding: ${props => props.top || 0} ${props => props.side || 0} ${props => props.bottom || 0};
`;

const Padding = ({top, bottom, side, children}) => <PaddingBox top={top} bottom={bottom} side={side}>{children}</PaddingBox>;

export default Padding;