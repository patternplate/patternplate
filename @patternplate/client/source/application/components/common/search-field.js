import {debounce} from 'lodash';
import React, {Component, PropTypes as types} from 'react';
import styled from 'styled-components';

import Icon from './icon';

const StyledSearchField = styled.label`
	display: flex;
	align-items: center;
	height: 60px;
	padding: 10px 15px;
`;

const StyledIcon = styled(Icon)`
	flex-grow: 0;
	flex-shrink: 0;
	fill: ${props => props.theme.color};
`;

const StyledInput = styled.input`
	position: relative;
	z-index: 2;
	width: 100%;
	border: 0;
	border-radius: 0;
	background: transparent;
	font-size: 16px;
	color: ${props => props.theme.color};
	padding: 0;
	appearance: none;
	border-radius: 0;
	border: none;
	:focus {
		outline: none;
	}
`;

const StyledInputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-shrink: 0;
	margin-left: 10px;
`;

const StyledInputSuggestion = styled(p => <StyledInput {...p} readOnly/>)`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	opacity: .3;
`;

export default class SearchField extends Component {
	static propTypes = {
		className: types.string,
		name: types.string.isRequired,
		onBlur: types.func,
		onChange: types.func,
		onClear: types.func,
		onComplete: types.func,
		onFocus: types.func,
		onKeyDown: types.func,
		onUp: types.func,
		onDown: types.func,
		onStop: types.func,
		placeholder: types.string,
		suggestion: types.string,
		title: types.string,
		value: types.string
	};

	static defaultProps = {
		blur: () => {},
		onChange: () => {},
		onFocus: () => {},
		onUp: () => {},
		onDown: () => {},
		onBlur: () => {},
		onStop: () => {}
	};

	constructor(...args) {
		super(...args);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleStop = debounce(this.props.onStop, 300, {trailing: true});
		this.timer = null;
	}

	handleChange(e) {
		e.persist();
		this.props.onChange(e);
		this.handleStop(e);
	}

	handleKeyDown(e) {
		const {target} = e;
		const hasValue = target.value.length > 0;
		const atEnd = hasValue && target.selectionStart === target.value.length;

		if (e.which !== 27) {
			e.stopPropagation();
		}
		if ((e.which === 27) && hasValue) {
			e.preventDefault();
			this.props.onClear();
		}
		if (e.which === 38) {
			this.props.onUp(e);
		}
		if ((e.which === 39) && atEnd && this.props.suggestion) {
			e.preventDefault();
			this.props.onComplete(this.props.suggestion);
		}
		if ((e.which === 40) && atEnd) {
			e.preventDefault();
			this.props.onDown(e);
		}
	}

	render() {
		const props = this.props;

		return (
			<StyledSearchField>
				<StyledIcon symbol="search"/>
				<StyledInputContainer>
					<StyledInputSuggestion
						value={props.suggestion || ''}
						/>
					<StyledInput
						autoFocus={props.autoFocus}
						name={props.name}
						onBlur={props.onBlur}
						onChange={this.handleChange}
						onFocus={props.onFocus}
						onKeyDown={this.handleKeyDown}
						placeholder={props.placeholder}
						title={props.title}
						type="text"
						value={props.value}
						data-search={props.mark}
						/>
				</StyledInputContainer>
				{props.children}
			</StyledSearchField>
		);
	}
}
