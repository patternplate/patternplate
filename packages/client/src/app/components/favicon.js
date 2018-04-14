import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Helmet from "react-helmet";
import {
  styled,
  themes,
  Symbol,
  IconDefinitions
} from "@patternplate/components";
import * as svg from "../utils/svg";
import platform from "platform";

const THEMES = themes();

const SVG_FAVICON_SUPPORT = ["Firefox"];

class FavIcon extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentDidMount() {
    if (SVG_FAVICON_SUPPORT.indexOf(platform.name) > -1) {
      return;
    }

    svg
      .png(getSource(this.props))
      .then(pngHref => this.setState({
        pngHref
      }))
      .catch(err => {
        console.error(err);
        this.setState({
          pngHref: null
        });
      });
  }

  componentWillReceiveProps(next) {
    if (SVG_FAVICON_SUPPORT.indexOf(platform.name) > -1) {
      return;
    }

    svg
      .png(getSource(next))
      .then(pngHref => this.setState({
        pngHref
      }))
      .catch(err => {
        console.error(err);
        this.setState({
          pngHref: null
        });
      });
  }

  render() {
    const source = getSource(this.props);
    const svgHref = svg.btoa(source);

    return (
      <Helmet
        link={[
          ...(this.state.pngHref ? [{ rel: "icon", href: this.state.pngHref, type: "image/png" }] : []),
          {
            rel: "icon",
            href: svgHref,
            type: "image/svg+xml"
          }
        ]}
      />
    );
  }
}

export default styled(FavIcon)`
  width: 100%;
  height: auto;
  stroke: ${props => props.theme.colors.color};
  stroke-width: 0;
  fill: ${props => props.theme.colors.color};
`;

function getSource(props) {
  if (!props.source) {
    return renderToStaticMarkup(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Symbol
          definition={IconDefinitions.patternplate}
          emit
          style={{ fill: getFill(props) }}
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
