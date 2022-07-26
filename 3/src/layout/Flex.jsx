import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => props.nowrap? "nowrap" : "wrap"};
  gap: ${props => `var(--spacing-${props.gap})`};
  
  & > * {
    flex-shrink: 0;
  }
`;

export default Flex;