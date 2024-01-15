import { CheckboxWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import { Checkbox } from "@mantine/core";
import { requiredRule, useFormControl } from "@mongez/react-form";

function CheckboxInput({
  placeholder,
  defaultChecked,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { checked, setChecked, error, visibleElementRef, otherProps } =
    useFormControl(props);

  return (
    <Flex direction="column" gap="0" ref={visibleElementRef}>
      <CheckboxWrapper>
        <Checkbox
          placeholder={placeholder}
          defaultChecked={defaultChecked}
          label={label}
          checked={checked}
          onChange={e => {
            setChecked(e.currentTarget.checked);
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
