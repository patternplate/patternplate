import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Icon from './common/icon';
import Link from './common/link';

export default SearchButton;

function SearchButton(props) {
	return (
		<StyledLink
			title={`Enable search ${props.shortcut.toString()}`}
			query={{'search-enabled': !props.enabled}}
			>
			<StyledIcon
				base={props.base}
				symbol="search"
				/>
			Search
		</StyledLink>
	);
}

SearchButton.propTypes = {
	base: t.string,
	enabled: t.bool,
	location: t.any,
	shortcut: t.any
};

const StyledIcon = styled(Icon)`
	fill: ${props => props.theme.color};
`;

const StyledLink = styled(Link)`
	font-size: 0;
`;
