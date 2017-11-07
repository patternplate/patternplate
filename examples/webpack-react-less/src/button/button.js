import React from "react";

export default Button;

function Button(props) {
  return <button className="Button">{props.children}</button>;
}
