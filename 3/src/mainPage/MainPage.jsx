import Text from "../text/Text";
import Stack from "../layout/Stack";
import Wrapping from "../layout/Wrapping";
import TaskList from "./TaskList";
import {PrimaryButton, SecondaryButton} from "../button/Button";
import Typography from "../text/Typography";
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Modal from "../modal/Modal";
import CustomCalendar from "../calendar/CustomCalendar";

function MainPage ({data}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskArr, setTaskArr] = useState(data.selectedDateTaskArr(selectedDate));
  const doingTaskArr = taskArr.filter((task)=>!task.isDone);
  const doneTaskArr = taskArr.filter((task)=>task.isDone);
  const nav = useNavigate();
  const isToday = (date) => {
    return new Date().toDateString() === date.toDateString();
  }
  
  const doingTaskListTitle = isToday(selectedDate)? "진행중" : "완료하지 못함";
  
  const taskItemOnClickHandler = (task) => {
    data.toggleChecking(task);
    setTaskArr(data.selectedDateTaskArr(selectedDate));
  };
  
  const closeModal = () => setIsModalOpen(false) ;
  const calendarOnChangeHandler = (date) => {
    setSelectedDate(date);
    setTaskArr(data.selectedDateTaskArr(date));
    closeModal();
  }
  
  return (
    <>
      {
        isModalOpen &&
          <Modal
              background
              verticalAlign="center"
              onClick={closeModal}>
            <CustomCalendar onChange={calendarOnChangeHandler} value={selectedDate}/>
          </Modal>
      }
      <Wrapping top="76px">
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack row spacing={1}>
              <h1><Typography type="title">
                {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
              </Typography></h1>
              <SecondaryButton round small onClick={()=>setIsModalOpen(true)}><Icon type="more" size={24}/></SecondaryButton>
            </Stack>
            <Text size="14px" weight="600" color="var(--black-main)">{doingTaskArr.length}개 {doingTaskListTitle}, {doneTaskArr.length}개 완료됨</Text>
          </Stack>
          <hr/>
          <Stack spacing={4}>
            <TaskList title={doingTaskListTitle} tasks={doingTaskArr} onClick={taskItemOnClickHandler}/>
            <TaskList title="완료됨" tasks={doneTaskArr} onClick={taskItemOnClickHandler}/>
          </Stack>
        </Stack>
        {isToday(new Date())
          && <PrimaryButton
                round
                onClick={()=>nav("/add")}
                className="fixed-rb">
               <Icon type="plus" size={24}/>
            </PrimaryButton>
        }
      </Wrapping>
    </>
  );
}

export default MainPage;