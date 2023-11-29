"use client";
import {
  StyledInput,
  StyledSelectInput,
  StyledTextarea,
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

function TextAreaInput({
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
          <StyledTextarea
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            cols={5}
            
            {...props}
          />
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default TextAreaInput;

TextAreaInput.defaultProps = {
  type: "textarea",
  rules: [requiredRule, minLengthRule, maxLengthRule],
};
