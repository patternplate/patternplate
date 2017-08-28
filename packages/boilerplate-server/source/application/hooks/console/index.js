import { resolve } from 'path';
import { exists } from '../../../library/utilities/fs';

import requireAll from 'require-all';
import consoleFactory from './console';

export default {
	'after': [ 'hooks:log:start:after' ],

	'start': async function startConsoleHook ( application ) {
		let taskPaths = application.runtime.cwds
			.map( ( loadPath ) => resolve( loadPath, this.configuration.path ) )
			.filter( ( item, index, list ) => {
				return list.lastIndexOf( item ) !== index || list.indexOf( item ) === index;
			});

		let existingtaskPaths = [];

		for ( let taskPath of taskPaths ) {
			if ( await exists( taskPath ) ) {
				existingtaskPaths.push( taskPath );
			}
		}

		let tasks = existingtaskPaths.map( ( tasksPath ) => requireAll( tasksPath ) )
			.reduce( ( results, task ) => Object.assign( results, task ), {} );

			// load module tasks
		let moduleTasks = Object.keys( this.configuration )
				.filter( ( taskName ) => typeof this.configuration[ taskName ].enabled === 'string' )
				.reduce( ( result, taskName ) => {
					let taskModuleName = this.configuration.enabled[ taskName ].enabled;

				try {
					result[ taskName ] = require( taskModuleName );
					this.log.debug( `Required module route '${taskName}' from module '${taskModuleName}'` );
				} catch ( err ) {
					this.log.warn( `Could not require module route '${taskName}' from module '${taskModuleName}'` );
					this.log.debug( err );
				}

			return result;
		}, {} );

		Object.assign(tasks, moduleTasks);
		application.console = consoleFactory( application, Object.assign( {}, this.configuration, { tasks } ) );
		return this;
	}
};
