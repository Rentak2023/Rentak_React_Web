"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import {
  maxLengthRule,
  minLengthRule,
  minRule,
  numberRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { trans } from "@mongez/localization";

function PhoneNumberInput({
  placeholder,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper style={{ overflow: "hidden" }} radius={props.bigRadius}>
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

export default PhoneNumberInput;
PhoneNumberInput.defaultProps = {
  type: "number",
  rules: [requiredRule, numberRule, minRule, maxLengthRule, minLengthRule],
};
