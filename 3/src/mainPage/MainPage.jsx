import Text from "../Text/Text";
import Stack from "../Layout/Stack";
import Wrapping from "../Layout/Wrapping";
import TaskList from "./TaskList";
import {PrimaryButton, SecondaryButton} from "../Button/Button";
import Typography from "../Text/Typography";
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function MainPage ({data}) {
  const [taskArr, setTaskArr] = useState(data.taskDataArr);
  const doingTaskArr = taskArr.filter((task)=>!task.isDone);
  const doneTaskArr = taskArr.filter((task)=>task.isDone);
  const nav = useNavigate();
  
  const taskItemOnClickHandler = (task) => {
    data.toggleChecking(task);
    setTaskArr(data.taskDataArr);
  }
  
  return (
    <Wrapping top="76px">
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Stack row spacing={1}>
            <h1><Typography type="title">2020년 7월 1일</Typography></h1>
            <SecondaryButton round small><Icon type="more" size={24}/></SecondaryButton>
          </Stack>
          <Text size="14px" weight="600" color="var(--black-main)">{doingTaskArr.length}개 진행중, {doneTaskArr.length}개 완료됨</Text>
        </Stack>
        <hr/>
        <Stack spacing={4}>
          <TaskList title="진행중" tasks={doingTaskArr} onClick={taskItemOnClickHandler}/>
          <TaskList title="완료됨" tasks={doneTaskArr} onClick={taskItemOnClickHandler}/>
       </Stack>
      </Stack>
      <PrimaryButton
          round
          onClick={()=>nav("/add")}
          className="fixed-rb">
        <Icon type="plus" size={24}/>
      </PrimaryButton>
    </Wrapping>
  );
}

export default MainPage;