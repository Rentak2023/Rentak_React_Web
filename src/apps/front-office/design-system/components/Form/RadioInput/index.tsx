import {
  StyledRadio,
  
} from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import { requiredRule, useFormControl } from "@mongez/react-form";

function RadioInput({
  placeholder,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, visibleElementRef, otherProps } =
    useFormControl(props);

  return (
    <Flex direction="column" ref={visibleElementRef}>
      <StyledRadio
        placeholder={placeholder}
        label={label}
        value={value}
        // checked={checked}
        onChange={e => {
          console.log(e.currentTarget.value)
          changeValue(e.currentTarget.value);
        }}
        {...otherProps}
      />
      <InputError error={error} />
    </Flex>
  );
}

export default RadioInput;

RadioInput.defaultProps = {
  type: "radio",
  defaultValue: 1,
  rules: [requiredRule],
};
