import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "./TaskList";
import Stack from "../../component/layout/Stack";
import Padding from "../../component/container/Padding";
import { IconButton } from "../../component/button/Button";
import Typography from "../../component/text/Typography";
import Icon from "../../component/Icons";
import Modal from "../../component/popup/Modal";
import CustomCalendar from "../../component/calendar/CustomCalendar";
import CategoryChips from "../../component/button/CategoryChips";
import ScrollX from "../../component/container/Scroll";

function MainPage ({data}) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [taskArr, setTaskArr] = useState(data.filteredByCategoryAndDateTaskArr(selectedDate, selectedCategory));
  const doingTaskArr = taskArr.filter((task)=>!task.isDone);
  const doneTaskArr = taskArr.filter((task)=>task.isDone);
  const nav = useNavigate();
  const isToday = (date) => {
    return new Date().toDateString() === date.toDateString();
  }
  const updateTaskArr = () =>
    setTaskArr(data.filteredByCategoryAndDateTaskArr(selectedDate, selectedCategory));
  
  useEffect(() => {
    updateTaskArr();
  }, [selectedCategory])
  useEffect(() => {
    setSelectedCategory('전체');
  }, [selectedDate])
  
  const doingTaskListTitle = isToday(selectedDate)? "진행중" : "완료하지 못함";
  
  const taskItemOnClickHandler = (task) => {
    data.toggleChecking(task);
    updateTaskArr();
  };
  
  const closeModal = () => setIsCalendarOpen(false) ;
  const calendarOnChangeHandler = (date) => {
    setSelectedDate(date);
    setTaskArr(data.selectedDateTaskArr(date));
    closeModal();
  }
  
  return (
    <>
      {
        isCalendarOpen &&
          <Modal
              background
              onClick={closeModal}>
            <CustomCalendar
              data={data}
              onChange={calendarOnChangeHandler}
              value={selectedDate}/>
          </Modal>
      }
      <Padding top="76px" side="var(--spacing-2)">
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack row spacing={1}>
              <Typography type="title" tag="h1">
                {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
              </Typography>
              <IconButton
                round
                type="secondary"
                size="md"
                onClick={() => setIsCalendarOpen(true)}>
                <Icon type="more" size={24}/>
              </IconButton>
            </Stack>
            <Typography type='subtitle' tag="h2">
              {doingTaskArr.length}개 {doingTaskListTitle}, {doneTaskArr.length}개 완료됨
            </Typography>
            <ScrollX>
              <Stack row spacing={1}>
                <CategoryChips
                  selectedCategory={selectedCategory}
                  onClick={setSelectedCategory}
                  categoryArr={['전체', ...data.categoryStrAtSelectedDateArr(selectedDate)]}/>
              </Stack>
            </ScrollX>
          </Stack>
          <hr/>
          <Stack spacing={4}>
            <TaskList
              title={doingTaskListTitle}
              tasks={doingTaskArr}
              onClick={taskItemOnClickHandler}
              active={isToday(selectedDate)} />
            <TaskList
              title="완료됨"
              tasks={doneTaskArr}
              onClick={taskItemOnClickHandler}
              active={isToday(selectedDate)} />
          </Stack>
        </Stack>
        {isToday(selectedDate)
          &&
          <IconButton
            round
            position="fixedRB"
            onClick={()=>nav("/add")}>
            <Icon type="plus" size={24}/>
          </IconButton>
        }
      </Padding>
    </>
  );
}

export default MainPage;