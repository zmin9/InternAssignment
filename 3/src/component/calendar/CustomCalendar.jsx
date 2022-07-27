import Calendar from "react-calendar";
import './CustomCalendar.css';
import Icon from "../Icons";
import {DateManager} from '../../dateManager';


const CustomCalendar = ({value, data, ...props}) => {
  const isSameDate = (date1, date2) => {
    return date1.toDateString()===date2.toDateString();
  }
  const isFutureDate = (date) => {
    return Date.parse(new Date().toString()) < Date.parse(date);
  }
  return (
    <Calendar
      {...props}
      value={value}
      calendarType="US"
      locale="en"
      navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      nextLabel={<Icon type='calendar-right' size={24}/>}
      prevLabel={<Icon type='calendar-left' size={24}/>}
      tileDisabled={({ date }) => DateManager.isFuture(date)}
      tileClassName={({ date }) => {
        return DateManager.isSameDay(value, date) ? 'selected-date-tile'
                : DateManager.isFuture(date) ? 'future-date-tile'
                  : [];
      }}
      tileContent={({ date }) => {
        if ( data.dateHavingScheduleStringArr.includes(date.toDateString()))
          return <div className="mark"></div>
        return null;
      }}
      showNeighboringMonth={false}
      view="month"
    />
  );
}

export default CustomCalendar;