import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import Icon from '../../component/Icons';
import { IconButton } from '../../component/button/Button';
import CategoryChip from '../../component/button/CategoryChip';
import CustomCalendar from '../../component/calendar/CustomCalendar';
import Padding from '../../component/container/Padding';
import ScrollX from '../../component/container/Scroll';
import FlexBox from '../../component/layout/FlexBox';
import Modal from '../../component/popup/Modal';
import DateManager from '../../dateManager';
import useTaskData from '../../useTaskData';
import Text from '../../component/text/Text';



function MainPage() {
	
	const data = useTaskData();
	const defaultCategory = '전체';
	
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(DateManager.getTodayDate);
	const [selectedCategory, setSelectedCategory] = useState(defaultCategory); // 하드코딩 X
	const [taskArr, setTaskArr] = useState(data.getTaskArrOnDateByCategory(selectedDate, selectedCategory));
	const doingTaskArr = taskArr.filter((task) => !task.isDone);
	const doneTaskArr = taskArr.filter((task) => task.isDone);
	const nav = useNavigate();
	const isToday = DateManager.isToday(selectedDate);
	const updateTaskArr = (date, category) =>
		setTaskArr(data.getTaskArrOnDateByCategory(date, category));
	
	const doingTaskListTitle = isToday ? '진행중' : '완료하지 못함';
	
	const taskItemOnClickHandler = (task) => {
		data.toggleChecking(task.id);
		updateTaskArr(selectedDate, selectedCategory);
	};
	
	const closeModal = () => setIsCalendarOpen(false);
	const calendarOnChangeHandler = (date) => {
		setSelectedDate(date);
		setSelectedCategory(defaultCategory);
		setTaskArr(data.getTaskArrOnDateByCategory(date, defaultCategory));
		closeModal();
	};
	const categoryChipOnClickHandler = (category) => {
		setSelectedCategory(category);
		updateTaskArr(selectedDate, category);
	};
	return (
		<>
			{
				isCalendarOpen &&
				<Modal  // 자체적으로 state를 관리하는 경우도 있음
					background
					onClick={closeModal}  // 이상함
				>
					<CustomCalendar
						data={data}
						onChange={calendarOnChangeHandler}
						value={selectedDate}
					/>
				</Modal>
			}
			<Padding top="76px" side="var(--spacing-2)">
				<FlexBox spacing={2}>
					<FlexBox spacing={1}>
						<FlexBox row spacing={1}>
							<h1>
								<Text size='32px' weight='700' color='var(--black-dark)' lineHeight='38.73px'>
									{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
								</Text>
							</h1>
							<IconButton
								round
								type="secondary"
								size="md"
								onClick={() => setIsCalendarOpen(true)}>
								<Icon type="more" size={24}/>
							</IconButton>
						</FlexBox>
						<h2>
							<Text size='14px' weight='600' color='var(--black-main)'>
								{doingTaskArr.length}개 {doingTaskListTitle}, {doneTaskArr.length}개 완료됨
							</Text>
						</h2>
						<ScrollX>
							<FlexBox row spacing={1}>
								{[defaultCategory, ...data.getCategoryArrByDate(selectedDate)].map((category, idx) =>
									<CategoryChip
										key={idx}
										category={category}
										selectedCategory={selectedCategory}
										onClick={categoryChipOnClickHandler}
									/>
								)}
							</FlexBox>
						</ScrollX>
					</FlexBox>
					<hr/>
					<FlexBox spacing={4}>
						<TaskList
							title={doingTaskListTitle}
							tasks={doingTaskArr}
							onClick={taskItemOnClickHandler}
							active={isToday}/>
						<TaskList
							title="완료됨"
							tasks={doneTaskArr}
							onClick={taskItemOnClickHandler}
							active={isToday}/>
					</FlexBox>
				</FlexBox>
				{isToday
					&&
					<IconButton
						round
						position="fixedRB"
						onClick={() => nav('/add')}>
						<Icon type="plus" size={24}/>
					</IconButton>
				}
			</Padding>
		</>
	);
}

export default MainPage;
