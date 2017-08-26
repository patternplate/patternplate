import React, {PropTypes as t} from 'react';
import textContent from 'react-addons-text-content';
import styled from 'styled-components';
import Code from '../code';

export default styled(MarkdownCodeBlock)`
	background: ${props => props.theme.backgroundSecondary};
	border-radius: 3px;
	font-size: 15.3px;
	line-height: 23px;
	padding: 16px;
	margin-bottom: 16px;
`;

function MarkdownCodeBlock(props) {
	const lang = getLanguage(props.children);
	const code = textContent(props.children);
	return <Code block className={props.className} language={lang}>{code}</Code>;
}

MarkdownCodeBlock.propTypes = {
	children: t.any,
	className: t.string
};

function getLanguage(children) {
	const [child] = children;
	if (!child) {
		return null;
	}
	const className = child.props.className;
	if (!className) {
		return null;
	}
	return className
		.split(' ')
		.map(n => n.replace('language-', ''))
		.find(n => typeof n === 'string' && n.length > 0);
}
