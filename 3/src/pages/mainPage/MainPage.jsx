import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TaskList from './TaskList';
import Icon from '../../component/Icons';
import {IconButton} from '../../component/button/Button';
import CategoryChips from '../../component/button/CategoryChips';
import CustomCalendar from '../../component/calendar/CustomCalendar';
import Padding from '../../component/container/Padding';
import ScrollX from '../../component/container/Scroll';
import Stack from '../../component/layout/Stack';
import Modal from '../../component/popup/Modal';
import Typography from '../../component/text/Typography';
import {DateManager} from '../../dateManager';
import {useTaskData} from '../../useTaskData';



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
						<Typography type="subtitle" tag="h2">
							{doingTaskArr.length}개 {doingTaskListTitle}, {doneTaskArr.length}개 완료됨
						</Typography>
						<ScrollX>
							<Stack row spacing={1}>
								<CategoryChips
									selectedCategory={selectedCategory}
									onClick={categoryChipOnClickHandler}
									categoryArr={[defaultCategory, ...data.getCategoryArrByDate(selectedDate)]}/>
							</Stack>
						</ScrollX>
					</Stack>
					<hr/>
					<Stack spacing={4}>
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
					</Stack>
				</Stack>
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
