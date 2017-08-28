import {basename, extname} from 'path';
import {merge} from 'lodash';
import minimist from 'minimist';

// Assemble augmented minimist options
const args = minimist(process.argv.slice(1));
const entry = process.argv[1];
const raw = args._;

const options = {
	...args,
	command: raw.slice(1).join(' '),
	entry: basename(entry, extname(entry))
};

/**
 * Handles success of top level Promise resolvers and logs message if any
 * @param  {object} [instance] Instance to perform success log from
 * @private
 */
function handleSuccess(instance) {
	if (instance && instance.log) {
		// instance.log.info(`[application] ${options.entry} executed sucessfully.`);
	}
}

/**
 * Handles and escalates top level Promise errors causing the process to crash if uncatched
 * @param {object} error - Error object to print and escalete
 * @private
 */
function handleError(error) {
	console.log(`${options.entry} failed.`);
	console.trace(error);

	setTimeout(() => {
		throw error;
	});
}

/**
 * Executes a promise based procedure, passes process options to it and handles exceptions
 * @param {function} procedure - Function to execute, must return Promise
 * @param {objecet} configuration - Object to deep merge with cli args objects
 * @return {Promise} result - Promise wrapping the result of the procedure
 * @private
 */
export default (procedure, configuration = {}) =>
	procedure(merge({}, options, configuration))
		.then(handleSuccess)
		.catch(handleError);
