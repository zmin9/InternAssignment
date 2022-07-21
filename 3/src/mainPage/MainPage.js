import Text from "../Text/Text";
import Stack from "../Stack/Stack";

function MainPage () {
  return (
    <>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Text size="32px" weight="700" color="var(--black-dark)" lineHeight="38.73px">2020년 7월 1일</Text>
          <Text size="14px" weight="600" color="var(--black-main)">3개 진행중, 2개 완료됨</Text>
        </Stack>
        <hr/>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Text size="18px" weight="700" color="var(--black-main)"> 진행중 </Text>
            <Stack row spacing={2}>
              <div>네모</div>
              <Stack spacing={0}>
                <Text size="14px" weight="500" color="var(--black-main)" lineHeight="24px">월급 통장 만들기</Text>
                <Text size="14px" weight="600" color="var(--black-light)">💰 은행</Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack spaing={2}>
            <Text size="18px" weight="700" color="var(--black-main)"> 완료됨 </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default MainPage;