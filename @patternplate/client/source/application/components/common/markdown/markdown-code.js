import styled from 'styled-components';
import Code from '../code';

export default styled(Code)`
	display: inline;
	padding: 0;
	background: ${props => props.theme.backgroundSecondary};
	border-radius: 3px;
	font-size: 15.3px;
	line-height: 23px;
	padding: 3px;
`;
