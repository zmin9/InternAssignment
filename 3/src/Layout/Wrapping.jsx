import styled from "styled-components";

const MarginBox = styled.div`
  margin: ${props => props.top || 0} var(--spacing-2) ${props => props.bottom || 0};
`;

const Wrapping = ({top, bottom, children}) => <MarginBox top={top} bottom={bottom}>{children}</MarginBox>;

export default Wrapping;