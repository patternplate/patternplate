import React from 'react';
import styled from 'styled-components';

const StyledDemo = styled.iframe`
	width: 100%;
	height: 100%;
	border: 0;
`;

class PatternDemo extends React.Component {
	constructor(...args) {
		super(...args);
		this.getRef = this.getRef.bind(this);
		this.udpdate = this.update.bind(this);
	}

	update() {
		const srcdoc = require('srcdoc-polyfill');
		const compliance = ('srcdoc' in global.document.createElement('iframe'));

		if (this.ref && !compliance) {
			srcdoc.set(this.ref, this.props.contents);
		}
	}

	componentDidMount() {
		this.update();
	}

	componentDidUpdate(previous) {
		if (previous.contents !== this.props.contents) {
			this.update();
		}
	}

	getRef(ref) {
		this.ref = ref;
	}

	render() {
		const {props} = this;
		return (
			<StyledDemo innerRef={this.getRef} srcDoc={props.contents} seamless/>
		);
	}
}

export default PatternDemo;
