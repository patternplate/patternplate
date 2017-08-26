import React, {Component, PropTypes as t} from 'react';
import {Link} from 'react-router';
import join from 'classnames';
import autobind from 'autobind-decorator';
import pure from 'pure-render-decorator';
import {noop} from 'lodash';

import Icon from '../common/icon';

@pure
@autobind
export default class Message extends Component {
	static propTypes = {
		base: t.string.isRequired,
		id: t.string.isRequired,
		onTimeRequest: t.func.isRequired,
		onDismiss: t.func.isRequired,
		onRetry: t.func.isRequired
	};

	static defaultProps = {
		onTimeRequest: noop,
		onDismiss: noop,
		onRetry: noop
	};

	handleDismissClick() {
		this.props.onDismiss(this.props.id);
	}

	handleRetryClick() {
		this.props.onRetry();
	}

	render() {
		const {props} = this;
		const className = join('message', `message--${props.type}`);
		return (
			<div className={className}>
				<div className="message__header">
					{
						props.title &&
							<div className="message__title">
								{props.title}
							</div>
					}
					<div className="message__action">
						{
							props.retry &&
								<button
									onClick={this.handleRetryClick}
									type="button"
									className="message__button"
									title={`Retry loading ${props.pattern} [ctrl+r]`}
									>
									Retry
								</button>
						}
						<button
							onClick={this.handleDismissClick}
							type="button"
							className="message__button"
							title={`Dismiss message [esc]`}
							>
							Dismiss
						</button>
					</div>
				</div>
				<div className="message__body">
					<pre className="message__preformatted">
						{props.body}
					</pre>
				</div>
				<div className="message__meta">
					{
						props.pattern &&
							<Link
								to={{
									pathname: `${props.base}pattern/${props.pattern}`,
									query: props.location.query
								}}
								className="message__field"
								>
								<Icon base={props.base} symbol="pattern"/>
								{props.pattern}
							</Link>
					}
					{
						props.file &&
							<div className="message__field">
								<Icon base={props.base} symbol="documentation"/>
								{props.file.slice(-50)}
							</div>
					}
					{
						/* props.timestamp &&
							<div className="message__field">
								<Icon symbol="globals"/>
								{ago(new Date(props.timestamp))}
								{props.time - props.timestamp}
							</div> */
					}
				</div>
			</div>
		);
	}
}
