import Calendar from "react-calendar";
import './CustomCalendar.css';
import Icon from "../Icons";

const isSameDate = (date1, date2) => {
  return date1.toDateString()===date2.toDateString();
}

const isFutureDate = (date) => {
  return Date.parse(new Date().toString()) < Date.parse(date);
}

const CustomCalendar = ({value, ...props}) => {
  return (
    <Calendar
      {...props}
      value={value}
      calendarType="US"
      locale="en"
      navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      nextLabel={<Icon type='calendar-right' size={24}/>}
      prevLabel={<Icon type='calendar-left' size={24}/>}
      tileDisabled={({ date }) => isFutureDate(date)}
      tileClassName={({ date }) => isSameDate(value, date) ? 'selected-date-tile'
                                    : isFutureDate(date)? 'future-date-tile'
                                      : []}
      showNeighboringMonth={false}
      view="month"
    />
  );
}

export default CustomCalendar;