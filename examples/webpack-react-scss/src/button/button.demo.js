import React from "react";
import scss from "./button.demo.scss";
import Button from "./button";

const css = () => scss;

export {css};
export default ButtonDemo;

function ButtonDemo() {
  return <Button>Demo Button</Button>;
}
