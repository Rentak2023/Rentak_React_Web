import { navigateTo } from "@mongez/react-router";
import { RefObject, forwardRef } from "react";
import { BaseButton } from "./style";
import { ButtonProps } from "./type";

const Button = forwardRef((props: ButtonProps, ref?) => {
  const navigate = props.to ? () => navigateTo(props.to || "") : () => {};

  return <BaseButton ref={ref as RefObject<HTMLInputElement>} onClick={navigate} {...props} />;
});

export default Button;