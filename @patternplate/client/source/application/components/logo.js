import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import * as svg from '../utils/svg';

class Logo extends React.Component {
	render() {
		const {props} = this;

		if (typeof props.source !== 'string') {
			return null;
		}

		const [sanitized] = svg.sanitize(svg.purge([svg.parse(props.source)]));

		return (
			<div className={props.className}>
				{svg.render(sanitized)}
			</div>
		);
	}
}

export default styled(Logo)`
	width: 100%;
	height: auto;
	stroke: ${props => props.theme.color};
	stroke-width: 0;
	fill: ${props => props.theme.color};
`;

Logo.propTypes = {
	className: t.string,
	source: t.string
};
