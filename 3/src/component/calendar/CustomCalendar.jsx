import Calendar from 'react-calendar';
import './CustomCalendar.css';
import Icon from '../Icons';
import DateManager from '../../dateManager';
import useTaskData from '../../useTaskData';


const CustomCalendar = ({ value, ...props }) => {
	const data = useTaskData();
	return (
		<Calendar
			{...props}
			value={value}
			locale="en"
			calendarType="US"
			view="month"
			showNeighboringMonth={false}
			navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
			nextLabel={<Icon type='calendar-right' size={24}/>}
			prevLabel={<Icon type='calendar-left' size={24}/>}
			tileDisabled={({ date }) => DateManager.isFuture(date)}
			tileClassName={({ date }) =>
				DateManager.isSameDay(value, date) ? 'selected-date-tile'
					: DateManager.isFuture(date) ? 'future-date-tile'
						: []}
			tileContent={({ date }) => {
				if ( data.checkWhetherTasksIsOn(date) )
					return <div className="mark" />;
				return null;
			}}
		/>
	);
};

export default CustomCalendar;
