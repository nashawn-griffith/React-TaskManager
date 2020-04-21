import React, {useReducer} from 'react';
import {TaskContext} from '../context/taskContext';
import {TaskReducer} from '../reducers/taskReducer';
import {ADD, REMOVE, CLEAR, FIND} from '../types/types';

const TaskProvider = props => {
	const [tasks, dispatch] = useReducer(TaskReducer, [
		{
			id: 1,
			title: 'Study',
		},

		{
			id: 2,
			title: 'Sleep',
		},
	]);

	const addTask = title => {
		dispatch({
			type: ADD,
			payload: {
				title,
			},
		});
	};

	const removeTask = () => {
		console.log('remove task');
	};

	const clearTasks = () => {
		console.log('clear task');
	};

	const findTask = () => {
		console.log('find task');
	};

	const taskContextParams = {
		tasks,
		addTask,
		removeTask,
		clearTasks,
		findTask,
	};

	return <TaskContext.Provider value={taskContextParams}>{props.children}</TaskContext.Provider>;
};

export default TaskProvider;
