import { StyledRadio } from "../styles";
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
  const {
    checked,
    value,
    setChecked,
    error,
    name,
    visibleElementRef,
    otherProps,
  } = useFormControl(props, {
    multiple: false,
    isCollectable(formControl) {
      return formControl.checked && Boolean(formControl.value);
    },
    collectValue: formControl => {
      return formControl.checked ? Number(formControl.value) : null;
    },
  });

  return (
    <Flex direction="column" ref={visibleElementRef}>
      <StyledRadio
        placeholder={placeholder}
        label={label}
        name={name}
        value={value}
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
  rules: [requiredRule],
};
