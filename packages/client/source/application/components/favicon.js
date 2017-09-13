import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import Helmet from 'react-helmet';
import {
  styled,
  themes,
  Icon,
  Symbol,
  IconDefinitions
} from '@patternplate/components';
import * as svg from '../utils/svg';

const THEMES = themes();

class FavIcon extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentDidMount() {
    if (typeof this.props.source !== 'string') {
      return;
    }

    const [purged] = svg.purge([svg.parse(this.props.source)]);
    const source = svg.stringify(purged);

    svg
      .png(source)
      .then(href => this.setState({href}))
      .catch(err => {
        console.error(err);
        this.setState({href: null});
      });
  }

  render() {
    return (
      <Helmet
        link={[
          {rel: 'icon', href: this.state.href, type: 'image/png'},
          {
            rel: 'icon',
            href: svg.btoa(getSource(this.props)),
            type: 'image/svg+xml'
          }
        ]}
      />
    );
  }
}

export default styled(FavIcon)`
  width: 100%;
  height: auto;
  stroke: ${props => props.theme.color};
  stroke-width: 0;
  fill: ${props => props.theme.color};
`;

function getSource(props) {
  if (!props.source) {
    return renderToStaticMarkup(
      <svg viewBox="0 0 24 24">
        <Symbol
          definition={IconDefinitions.patternplate}
          emit={true}
          style={{fill: getFill(props)}}
        />
      </svg>
    );
  }

  const [purged] = svg.purge([svg.parse(props.source)]);
  return svg.stringify(purged);
}

function getFill(props) {
  if (props.error) {
    return THEMES.dark.error;
  }
  return THEMES.dark.active;
}
