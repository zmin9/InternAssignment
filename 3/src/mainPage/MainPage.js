import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import TaskList from "./TaskList";

function MainPage () {
  const doingTaskList = [
    {id: 0, isDone: false, title:"월급 통장 만들기", category:"💰 은행"},
    {id: 1, isDone: false, title:"월세 내기", category:"💰 은행"},
    {id: 2, isDone: false, title:"손 세정제", category:"🛒 쇼핑"}
  ];
  const doneTaskList = [
    {id: 3, isDone: false, title:"영화표 예매하기", category:"💪 할 일"},
    {id: 4, isDone: false, title:"블로그 작성하기", category:"💪 할 일"}
  ];
  
  return (
    <>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Text size="32px" weight="700" color="var(--black-dark)" lineHeight="38.73px">2020년 7월 1일</Text>
          <Text size="14px" weight="600" color="var(--black-main)">3개 진행중, 2개 완료됨</Text>
        </Stack>
        <hr/>
        <Stack spacing={4}>
          <TaskList title="진행중" tasks={doingTaskList} />
          <TaskList title="완료됨" tasks={doneTaskList} />
        </Stack>
      </Stack>
    </>
  );
}

export default MainPage;