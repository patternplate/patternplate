import React, {PropTypes as t} from 'react';
import join from 'classnames';

import Icon from './icon';

export default Select;

function Select(props) {
	const className = join('select', props.className);

	return (
		<label className={className}>
			<select
				className="select__native"
				onChange={props.onChange}
				value={props.value.value}
				>
				{
					props.options.map(({value, name}) => {
						return <option key={value} value={value}>{name}</option>;
					})
				}
			</select>
			<span className="select__label">
				{props.label}
			</span>
			<div className="select__body">
				<span className="select__value">
					{props.value.name}
				</span>
				<Icon
					base={props.base}
					className="select__icon"
					symbol="arrow-right"
					/>
			</div>
		</label>
	);
}

Select.propTypes = {
	base: t.string.isRequired,
	className: t.string,
	value: t.shape({
		value: t.string.isRequired,
		name: t.string.isRequired
	}),
	options: t.arrayOf(t.shape({
		value: t.string.isRequired,
		name: t.string.isRequired
	})),
	onChange: t.func.isRequired
};
