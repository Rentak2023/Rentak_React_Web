import { CheckboxWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import { Checkbox } from "@mantine/core";
import { requiredRule, useFormControl } from "@mongez/react-form";
import Is from "@mongez/supportive-is";

function CheckboxInput({
  placeholder,
  label,
  multiple = false,
  ...props
}: InputPropsType) {
  const {
    id,
    checked,
    setChecked,
    error,
    visibleElementRef,
    otherProps,
  } = useFormControl(props, {
    multiple,
    isCollectable(formControl) {
      return multiple ? formControl.checked : true;
    },
    collectValue: formControl => {
      if (!formControl.value) return formControl.checked;
      return formControl.checked
        ? Is.numeric(formControl.value)
          ? Number(formControl.value)
          : formControl.value
        : null;
    },
  });


  return (
    <Flex direction="column" gap="0" ref={visibleElementRef}>
      <CheckboxWrapper>
        <Checkbox
          placeholder={placeholder}
          checked={checked}
          id={id}
          label={label}
          onChange={e => {
            console.log(e.target.checked);

            setChecked(e.target.checked);
          }}
          {...otherProps}
        />
      </CheckboxWrapper>
      <InputError error={error} />
    </Flex>
  );
}

export default CheckboxInput;

CheckboxInput.defaultProps = {
  type: "checkbox",
  defaultValue: 1,
  rules: [requiredRule],
};
