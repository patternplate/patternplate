import React from "react";
import less from "./button.demo.less";
import Button from "./button";

const css = () => less;

export {css};
export default ButtonDemo;

function ButtonDemo() {
  return <Button>Demo Button</Button>;
}
