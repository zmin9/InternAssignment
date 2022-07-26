import Chip from "./button/Chip";

const CategoryChips = ({selectedCategory, categoryArr, onClick}) => {
  const getShortCategory = (category) => category.length > 12? category.slice(0,10)+'⋯' : category;
  return(
    <>
      {categoryArr.map((category, idx) =>
        <Chip key={idx}
              round
              selected={category === selectedCategory}
              onClick={() => onClick(category)}
        >{getShortCategory(category)}</Chip>
      )}
    </>
  );
};

export default CategoryChips;