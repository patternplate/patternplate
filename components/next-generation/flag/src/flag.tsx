import * as React from "react";
import { StyledText } from './flag.styles';

export interface FlagProps {
  className?: string;
  children: string;
}

export const Flag: React.SFC<FlagProps> = props => {
  return <StyledText className={props.className}>{props.children}</StyledText>;
}
