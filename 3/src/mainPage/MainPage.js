import Text from "../Text/Text";
import Stack from "../stack";

function MainPage () {
  return (
    <>
      <Stack spacing={16}>
        <Stack spacing={8}>
          <Text size="32px" weight="700" color="var(--black-dark)">2020년 7월 1일</Text>
          <Text size="14px" weight="600" color="var(--black-main)">3개 진행중, 2개 완료됨</Text>
        </Stack>
      </Stack>
    </>
  );
}

export default MainPage;