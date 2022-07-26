import styled from "styled-components";
import Flex from "./Flex";

const StackContainer = styled(Flex)`
  flex-direction: ${props => props.row? "row" : "column"};
  align-items: ${props => props.alignCenter && "center"};
`;

const Stack = ({children, spacing, row, alignCenter}) => {
  const checkIterable = (obj) => {
    if (obj === null || obj === undefined) return false;
    return typeof obj[Symbol.iterator] === "function";
  }
  return (
    <StackContainer row={row} alignCenter={alignCenter} gap={spacing} nowrap>
      { checkIterable(children)?
          children.flat().map((child) => child)
        :
        children
      }
    </StackContainer>
  );
};

export default Stack;
