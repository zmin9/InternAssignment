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

const Stack = ({items, spacing, row}) => {
  return (
    <StackContainer row={row}>
      {
        items.map((item) =>
          <Item spacing={spacing} row={row}>
            {item}
          </Item>
        )
      }
    </StackContainer>
  );
};

export default Stack;
