import React, {Component} from 'react';
import classnames from 'classnames';

class Headline extends Component {
  displayName = 'Headline';

  static defaultProps = {
    children: 'Headline',
    order: 1
  };

  render() {
    const TagName = `h${this.props.order}`;
    const className = classnames('h', `h${this.props.display || this.props.order}`, this.props.className);

    return (
      <TagName className={className}>
        {this.props.children}
      </TagName>
    );
  }
}

export default Headline;
