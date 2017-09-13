import chalk from 'chalk';
import Duration from 'duration';

function formatDuration(start, end = new Date()) {
	return new Duration(start, end).toString(1);
}

function getDurationStamp(start) {
	const duration = formatDuration(start);
	return chalk.grey(`${chalk.grey('[' + duration + ']')}`);
}

function getMessage(strings, values) {
	return strings.reduce((result, string, index) => {
		const value = typeof values[index] !== 'undefined' ? values[index] : '';
		const formatted = value instanceof Date && index === values.length - 1 ? getDurationStamp(value) : value;
		return `${result}${string}${formatted}`;
	}, '');
}


export function fail(strings, ...values) {
	const sign = `${chalk.red('✖')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}

export function warn(strings, ...values) {
	const sign = `${chalk.yellow('⚠')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}

export function deprecation(strings, ...values) {
	const sign = `${chalk.yellow('⚠  Deprecation')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}

export function wait(strings, ...values) {
	const sign = `${chalk.grey('⧗')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}

export function ok(strings, ...values) {
	const sign = `${chalk.grey('✔')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}

export function ready(strings, ...values) {
	const sign = `${chalk.green('✔')}`;
	return `${sign}    ${getMessage(strings, values)}`;
}
