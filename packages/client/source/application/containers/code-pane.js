import {DOMParser, XMLSerializer} from 'xmldom';
import pretty from 'pretty';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

// import * as actions from '../actions';
import {mountable, skippable} from '../behaviours';
import CodePane from '../components/code-pane';
import * as item from '../selectors/item';

export default connect(mapProps)(skippable(mountable(CodePane)));

const parser = new DOMParser();
const serializer = new XMLSerializer();

const selectDemoSource = createSelector(
	state => state.demo.contents,
	docSource => {
		if (typeof docSource !== 'string') {
			return docSource;
		}
		const doc = parser.parseFromString(docSource, 'text/html');
		const container = findContainer(doc);
		const serialized = serializer.serializeToString(container, 'text/html');
		const start = serialized.replace(/^<div xmlns="http:\/\/www\.w3\.org\/1999\/xhtml">/, '');
		return start.replace(/<\/div>$/, '');
	}
);

const selectSource = createSelector(
	selectDemoSource,
	contents => typeof contents === 'string' ? pretty(contents) : contents
);

function findContainer(doc) {
	const body = [...doc.documentElement.childNodes].find(node => node.nodeName.toLowerCase() === 'body');
	return [...body.childNodes].find(node => node.nodeName.toLowerCase() === 'div');
}

function mapProps(state) {
	return {
		active: item.selectType(state) === 'pattern',
		env: item.selectEnv(state),
		source: selectSource(state)
	};
}
