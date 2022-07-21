import styled from "styled-components";

const StackContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.row? "row" : "column"};
`;

const StackItem = styled.div`
  margin: ${props => props.row ?
          `0 0 0 var(--spacing-${props.spacing})` : `var(--spacing-${props.spacing}) 0 0 0`
  };

  &:first-child {
    margin: 0;
  }
`;

const Stack = ({children, spacing, row}) => {
  const checkIterable = (obj) => {
    if (obj === null || obj === undefined) return false;
    return typeof obj[Symbol.iterator] === "function";
  }
  return (
    <StackContainer row={row}>
      { checkIterable(children)?
          children.flat().map((child, idx) =>
            <StackItem key={idx} spacing={spacing} row={row}>
              {child}
            </StackItem>
          )
        :
        children
      }
    </StackContainer>
  );
};

export default Stack;
