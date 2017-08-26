import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import Markdown from '../containers/markdown';

export default function Documentation(props) {
	return (
		<ScrollBox>
			<StyledDocumentation>
				<Markdown source={props.doc}/>
			</StyledDocumentation>
		</ScrollBox>
	);
}

Documentation.propTypes = {
	doc: t.string.isRequired,
	type: t.string.isRequired
};

const ScrollBox = styled.div`
	height: 100%;
	overflow: scroll;
	-webkit-overflow-sroll: touch;
	mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);
	-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);
`;

const StyledDocumentation = styled.div`
	box-sizing: border-box;
	margin: 0 auto;
	width: 100%;
	max-width: 800px;
	padding: 30px;
`;
