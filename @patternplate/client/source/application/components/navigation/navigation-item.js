import color from 'color';
import React, {PropTypes as types} from 'react';
import tag from 'tag-hoc';
import styled from 'styled-components';

import Icon from '../common/icon';
import Link from '../common/link';

export default class NavigationItem extends React.Component {
	constructor(...args) {
		super(...args);
		this.getRef = this.getRef.bind(this);
	}

	getRef(ref) {
		this.ref = ref;
	}

	componentDidMount() {
		if (this.props.active && this.ref) {
			setTimeout(() => {
				this.props.onScrollRequest({target: this.ref, props: this.props});
			});
		}
	}

	componentWillUpdate(next) {
		if (this.props.type === 'folder') {
			return;
		}
		if (next.active && this.ref) {
			this.props.onScrollRequest({target: this.ref, props: next});
		}
	}

	render() {
		const {props} = this;
		const title = props.title || `Navigate to ${props.name} ${props.type}`;
		const symbol = props.active ? props.symbolActive : props.symbol;

		return (
			<StyledNavigationItem
				active={props.active}
				className={props.className}
				innerRef={this.getRef}
				type={props.type}
				>
				<StyledNavigationLink
					active={props.active}
					href={props.href}
					sticky={props.type === 'folder' && props.active}
					type={props.type}
					title={title}
					>
					<StyledIcon active={props.active} size="m" symbol={symbol}/>
					<StyledName>{props.name}</StyledName>
					{props.meta &&
						<StyledMeta active={props.active}>{props.meta}</StyledMeta>
					}
				</StyledNavigationLink>
				{
					props.active && props.children
				}
			</StyledNavigationItem>
		);
	}
}

NavigationItem.propTypes = {
	active: types.bool,
	children: types.any,
	className: types.string,
	href: types.string.isRequired,
	id: types.string.isRequired,
	name: types.string.isRequired,
	onScrollRequest: types.func,
	symbol: types.string.isRequired,
	symbolActive: types.string,
	title: types.string,
	type: types.string.isRequired
};

const StyledIcon = styled(Icon)`
	flex: 0 0 auto;
	fill: ${props => props.theme.color};
	${props => props.active && `fill: ${color(props.theme.active)}`};
	margin: 5px 10px 5px 6px;
`;

const StyledName = styled.div`
	flex: 1 1 100%;
`;

const StyledMeta = styled.div`
	flex: 1 0  auto;
	margin: 0 ${props => props.active ? 6 : 10}px 0 auto;
`;

const StyledNavigationItem = styled.div`
	width: 100%;
	box-sizing: border-box;
	border-left: ${props => props.type === 'folder' && `3px solid transparent`};
	margin-left: 1px;
	${props => props.active && `border-color: ${color(props.theme.active).fade(0.6).toString()}`};
`;

const LinkTag = tag(['active', 'type'])(Link);

const StyledNavigationLink = styled(LinkTag)`
	box-sizing: border-box;
	display: flex;
	width: 100%;
	align-items: center;
	text-decoration: none;
	font-size: 16px;
	line-height: 20px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	${props => props.active && `
		margin-left: ${props.type === 'folder' ? '-3px' : '-4px'};
		padding-left: ${props.type === 'folder' ? 0 : '1px'};
		border-left: 3px solid ${props.theme.active};
	`};
	:link,
	:visited {
		color: ${props => props.theme.color};
		${props => props.active && `color: ${color(props.theme.active)}`};
	}
`;
