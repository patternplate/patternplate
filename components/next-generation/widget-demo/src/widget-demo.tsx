import * as querystring from "querystring";
import * as React from "react";
import { WidgetDemoError } from "./widget-demo-error";
import { WidgetDemoFrame } from "./widget-demo-frame";

export interface WidgetDemoProps {
  id: string;
  reload: boolean;
  src(id: string): string | undefined;
}

export class WidgetDemo extends React.Component<WidgetDemoProps> {
  public render(): JSX.Element | null {
    const {props} = this;
    const src = props.src(props.id);

    if (!src) {
      return <WidgetDemoError message={`Could not find ${props.id}`}/>
    }

    const q = querystring.stringify({ resize: true, reload: props.reload });
    return <WidgetDemoFrame src={`${src}?${q}`}/>;
  }
}
