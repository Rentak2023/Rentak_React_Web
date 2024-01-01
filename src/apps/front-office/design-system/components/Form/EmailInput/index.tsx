"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import { emailRule, requiredRule, useFormControl } from "@mongez/react-form";
import { trans } from "@mongez/localization";

function EmailInput({
  placeholder,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, otherProps, visibleElementRef } =
    useFormControl(props);

  return (
    <Flex ref={visibleElementRef} direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper radius={props.bigRadius}>
          <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            {...otherProps}
          />
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default EmailInput;

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
