import styled from "styled-components";

const StackContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.row? "row" : "column"};
`;

const Item = styled.div`
  & + & {
    margin: ${props => props.row ?
            `0 0 0 ${props.spacing}px` : `${props.spacing}px 0 0 0`
    }
  }
`;

const Stack = ({children, spacing, row}) => {
  if(Object.is(typeof children, String)) return children;
  return (
    <StackContainer row={row}>
      {children.map((child, idx) =>
        <Item key={idx} spacing={spacing} row={row}>
          {child}
        </Item>
      )}
    </StackContainer>
  );
};

export default Stack;
