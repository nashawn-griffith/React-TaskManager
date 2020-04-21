import React, {useContext, Fragment} from 'react';
import {TaskContext} from '../../context/taskContext';
import {TaskItem} from '../TaskItem/taskItem';

const Task = () => {
	const {tasks} = useContext(TaskContext);

	const displayMessage = () => {
		return <p>No Task to display</p>;
	};

	const displayTask = () => {
		return (
			<ul>
				{tasks.map(task => {
					return <TaskItem key={task.id} title={task.title} />;
				})}
			</ul>
		);
	};

	return <Fragment>{tasks.length > 0 ? displayTask() : displayMessage()}</Fragment>;
};

export {Task};
