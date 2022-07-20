import Text from "../Text/Text";
import Stack from "../stack";

function MainPage () {
  const temp = ['hi','hello'];
  return (
    <>
      <Text size="32px" weight="700" color="var(--black-dark)">2020년 7월 1일</Text>
      <Stack row spacing={10} items={temp} />
    </>
  );
}

export default MainPage;