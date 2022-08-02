import { useEffect, useState } from 'react';
import DateManager from './dateManager';

const defaultCategory = '전체';

const useTaskData = () => {
	const [taskDataArr, setTaskDataArr] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
	
	const addTask = (title, category) => {
		setTaskDataArr([
			...taskDataArr,
			{
				'id': DateManager.getNow,
				'date': DateManager.getNow,
				'title': title,
				'category': category,
				'isDone': false
			}
		]);
	};
	const toggleChecking = (taskId) => {
		const indexAtTaskDataArr = taskDataArr.map(task => task.id).indexOf(taskId);
		if(indexAtTaskDataArr === -1) {
			throw Error('유효하지 않은 Task ID 입니다');
		}
		const newArr = [...taskDataArr];
		newArr[indexAtTaskDataArr].isDone = !newArr[indexAtTaskDataArr].isDone;
		setTaskDataArr(newArr);
	};
	const getCategoryArrOnDate = ( date ) => taskDataArr
		.filter(task => DateManager.isSameDay(task.date ,date))
		.map(task => task.category)
		.reduce((result, category) => {
			if (result.includes(category)) return result;
			return [...result, category];
		}, [])
	;
	const getAllCategoryArr = () => taskDataArr
		.map(task => task.category)
		.reduce((result, category) => {
			if (result.includes(category)) return result;
			return [...result, category];
		}, []);
	
	const getTaskArrOnDateByCategory = ( date, category ) => {
		if (category === defaultCategory) return taskDataArr.filter(task => DateManager.isSameDay(task.date ,date));
		
		return taskDataArr
			.filter(task => DateManager.isSameDay(task.date ,date))
			.filter(task => task.category === category);
	};
	
	const isThereTaskOnDate = ( date ) => taskDataArr.some(task => DateManager.isSameDay(task.date, date));
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskDataArr));
	}, [taskDataArr]);
	
	return {
		addTask,
		toggleChecking,
		getAllCategoryArr,
		getCategoryArrOnDate,
		getTaskArrOnDateByCategory,
		isThereTaskOnDate
	};
};

export default useTaskData;
