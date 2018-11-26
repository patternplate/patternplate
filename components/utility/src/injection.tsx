import * as React from "react";
import * as PropTypes from "prop-types";

const childContextTypes = {
  injections: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.any,
      source: PropTypes.any
    })
  )
};

export interface InjectionProviderProps {
  injections: {
    target: React.Component;
    source: React.Component;
  }
}

export class InjectionProvider extends React.Component<InjectionProviderProps> {
  static childContextTypes = childContextTypes;

  getChildContext() {
    return { injections: this.props.injections };
  }

  render() {
    const { props } = this;
    return React.Children.only(props.children);
  }
}

export function inject(RawComponent) {
  const InjectedComponent = (props, context) => {
    const injections = Array.isArray(context.injections)
      ? context.injections
      : [];

    const applicable = injections.find(injection => {
      return (
        injection.target === RawComponent ||
        injection.target.RawComponent === RawComponent
      );
    });

    if (!applicable) {
      return <RawComponent {...props}>{props.children}</RawComponent>;
    }

    const Source = applicable.source;
    return <Source {...props}>{props.children}</Source>;
  };

  InjectedComponent.RawComponent = RawComponent;
  InjectedComponent.contextTypes = childContextTypes;
  return InjectedComponent;
}
