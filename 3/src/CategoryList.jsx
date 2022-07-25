import Chip from "./button/Chip";
import Stack from "./layout/Stack";
import styled from "styled-components";

const Container = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const CategoryList = ({selectedCategory, categoryArr, onClick}) => {
  return(
    <Container>
    <Stack row spacing={0}>
      {categoryArr.map((category, idx) =>
        <Chip key={idx}
              round
              selected={category === selectedCategory}
              onClick={() => onClick(category)}
        >{category}</Chip>
      )}
    </Stack>
    </Container>
  );
};

export default CategoryList;