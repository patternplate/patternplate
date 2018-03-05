import * as React from "react";
import * as classnames from "classnames";

export interface ButtonProps {
  children?: any;
  className?: string | string[];
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={classnames(["button", props.className])}>
      {props.children}
    </button>
  )
}

