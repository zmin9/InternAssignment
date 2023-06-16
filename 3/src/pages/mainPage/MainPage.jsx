import { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import Icon from '../../component/Icons';
import { IconButton } from '../../component/clickable/Button';
import CategoryChip from '../../component/clickable/CategoryChip';
import CustomCalendar from '../../component/calendar/CustomCalendar';
import Padding from '../../component/container/Padding';
import ScrollX from '../../component/container/Scroll';
import FlexBox from '../../component/layout/FlexBox';
import Modal from '../../component/popup/Modal';
import DateManager from '../../dateManager';
import useTaskData from '../../useTaskData';
import Text from '../../component/text/Text';
import PositionFixed from '../../component/layout/PositionFixed';
import BackgroundForPopup from '../../component/popup/BackgroundForPopup';



function MainPage() {
	const data = useTaskData();
	
	const defaultCategory = '전체';
	const currentDoingTitle = '진행중';
	const pastDoingTitle = '완료하지 못함';
	const doneTitle = '완료됨';
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(DateManager.getTodayDate);
	const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
	
	const taskArr = data.getTaskArrOnDateByCategory(selectedDate, selectedCategory);
	const doingTaskArr = taskArr.filter((task) => !task.isDone);
	const doneTaskArr = taskArr.filter((task) => task.isDone);
	const isToday = DateManager.isToday(selectedDate);
	
	const closeCalendarModal = () => setIsCalendarOpen(false);
	const taskItemOnClickHandler = (task) => data.toggleChecking(task.id);
	const categoryChipOnClickHandler = (category) => setSelectedCategory(category);
	const calendarOnChangeHandler = (date) => {
		setSelectedDate(date);
		setSelectedCategory(defaultCategory);
		closeCalendarModal();
	};
	return (
		<>
			<Padding top="76px" side="16px">
				<FlexBox spacing={3}>
					<FlexBox spacing={1}>
						<FlexBox row spacing={1}>
							<h1>
								<Text size='32px' weight='700' color='black dark' lineHeight='38.73px'>
									{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
								</Text>
							</h1>
							<IconButton
								round
								colorType="secondary"
								onClick={() => setIsCalendarOpen(true)}>
								<Icon type="more" size={24}/>
							</IconButton>
						</FlexBox>
						<h2>
							<Text size='14px' weight='600' color='black main'>
								{doingTaskArr.length}개 {isToday ? currentDoingTitle : pastDoingTitle},&nbsp;
								{doneTaskArr.length}개 완료됨
							</Text>
						</h2>
						<ScrollX>
							<FlexBox row spacing={1}>
								{[defaultCategory, ...data.getCategoryArrOnDate(selectedDate)].map((category) =>
									<CategoryChip
										key={category}
										category={category}
										selected={category === selectedCategory}
										onClick={categoryChipOnClickHandler}
									/>
								)}
							</FlexBox>
						</ScrollX>
					</FlexBox>
					<hr/>
					<FlexBox spacing={6}>
						<TaskList
							title={isToday ? currentDoingTitle : pastDoingTitle}
							tasks={doingTaskArr}
							onClick={taskItemOnClickHandler}
							active={isToday}/>
						<TaskList
							title={doneTitle}
							tasks={doneTaskArr}
							onClick={taskItemOnClickHandler}
							active={isToday}/>
					</FlexBox>
				</FlexBox>
			</Padding>
			{
				isToday &&
				<Link to='/add'>
					<PositionFixed right="16px" bottom="40px">
						<IconButton
							colorType="primary"
							size={3}
							round
						>
							<Icon type="plus" size={24}/>
						</IconButton>
					</PositionFixed>
				</Link>
			}
			{
				isCalendarOpen &&
				<>
					<BackgroundForPopup onClick={closeCalendarModal} />
					<Modal>
						<CustomCalendar
							data={data}
							onChange={calendarOnChangeHandler}
							value={selectedDate}
						/>
					</Modal>
				</>
			}
		</>
	);
}

export default MainPage;
