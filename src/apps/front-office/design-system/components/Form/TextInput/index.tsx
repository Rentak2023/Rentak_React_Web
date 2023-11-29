"use client";
import {
  StyledInput,
  StyledSelectInput,
  Wrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import {
  maxLengthRule,
  minLengthRule,
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";
import { trans } from "@mongez/localization";

function TextInput({
  placeholder,
  label,
  icon,
  defaultValue,
  clearable,
  ...props
}: InputPropsType) {
  const { id, value, changeValue, error } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput error={error}>
        <Wrapper>
          <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default TextInput;

TextInput.defaultProps = {
  type: "text",
  rules: [requiredRule, minLengthRule, maxLengthRule],
};
