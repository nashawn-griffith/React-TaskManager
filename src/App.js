import React from 'react';
import './App.css';
import TaskProvider from './provider/taskProvider';
import {Header} from './components/Header';
import {Task} from './components/Task';

function App() {
	return (
		<div>
			<TaskProvider>
				<div className='container'>
					<div className='app-wrapper'>
						<Header />
						<div className='main'>
							<Task />
						</div>
					</div>
				</div>
			</TaskProvider>
		</div>
	);
}

export default App;
