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
  const { checked, setChecked, error, visibleElementRef, otherProps } =
    useFormControl(props);

  return (
    <Flex direction="column" ref={visibleElementRef}>
      <StyledRadio
        placeholder={placeholder}
        label={label}
        checked={checked}
        onChange={e => {
          setChecked(e.currentTarget.checked);
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
