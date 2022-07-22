import styled from "styled-components";

const PaddingBox = styled.div`
  padding: ${props => props.top || 0} var(--spacing-2) ${props => props.bottom || 0};
`;

const Wrapping = ({top, bottom, children}) => <PaddingBox top={top} bottom={bottom}>{children}</PaddingBox>;

export default Wrapping;