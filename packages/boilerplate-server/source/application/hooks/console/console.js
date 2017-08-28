const nameSpace = new WeakMap();

class TaskConsole {
	constructor(application, options) {
		const {tasks} = options;
		nameSpace.set(this, {application, options, tasks});
	}

	async run(taskName, options) {
		const {application, tasks} = nameSpace.get(this);

		if (typeof taskName !== 'string') {
			throw new Error('Missing taskName parameter.');
		}

		if (!tasks[taskName]) {
			const taskNames = Object.keys(tasks).join(', ');
			const taskTerm = taskNames.length > 1 ? 'task' : 'tasks';
			const message = taskNames.length ?
				`Task "${taskName}" is not available. Available ${taskTerm}: ${taskNames}` :
				`No tasks available`;

			throw new Error(message);
		}

		if (tasks[taskName] && typeof tasks[taskName].index !== 'function') {
			throw new Error(`Task "${taskName}" is available but invalid.`);
		}

		application.log.info(`Starting taskName "${taskName}"...`);

		const task = tasks[taskName].index;
		const taskConfiguration = {...application.configuration.tasks[taskName], ...options};

		if (!taskConfiguration) {
			application.log.info(`Starting taskName "${taskName}" without configuration...`);
		}

		try {
			await task(application, taskConfiguration);
			application.log.info(`taskName "${taskName}" executed successfully`);
		} catch (err) {
			throw err;
		}
	}
}

function consoleFactory(...args) {
	return new TaskConsole(...args);
}

export default consoleFactory;
