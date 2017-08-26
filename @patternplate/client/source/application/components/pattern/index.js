import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import tag from 'tag-hoc';

import Markdown from '../common/markdown';
import PatternDemo from './pattern-demo';
import Search from '../../containers/search';

const VISIBILITY = props => props.checkers ? 'block' : 'none';

const StyledPattern = styled(tag(['checkers'])('div'))`
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	&::before {
		content: '';
		display: ${VISIBILITY};
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: ${props => checkers(props)};
		background-size: 16px 16px;
		background-position: 0 0, 8px 8px;
	}
`;

const StyledPatternFolder = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledPatternDoc = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: 30px;
	box-sizing: border-box;
`;

const StyledPatternDemo = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100%;
	max-width: 1240px;
	margin: 0 auto;
`;

export default class Pattern extends React.Component {
	render() {
		const {props} = this;
		switch (props.type) {
			case 'pattern':
				return (
					<StyledPattern checkers={props.opacity}>
						<StyledPatternDemo>
							<PatternDemo
								contents={props.contents}
								loading={props.loading}
								/>
						</StyledPatternDemo>
					</StyledPattern>
				);
			case 'not-found':
			default:
				return (
					<StyledPatternFolder>
						<StyledPatternDoc>
							<Search inline/>
							<Markdown source={props.docs}/>
						</StyledPatternDoc>
					</StyledPatternFolder>
				);
		}
	}
}

Pattern.propTypes = {
	demoSrc: t.string,
	id: t.string.isRequired,
	opacity: t.bool.isRequired,
	pattern: t.any.isRequired,
	type: t.string.isRequired,
	contents: t.string
};

function grad(fill) {
	return `linear-gradient(45deg, ${fill} 25%, transparent 25%, transparent 75%, ${fill} 75%, ${fill})`;
}

function checkers(props) {
	const fill = props.theme.border;
	return `
		${grad(fill)},
		${grad(fill)};
	`;
}
