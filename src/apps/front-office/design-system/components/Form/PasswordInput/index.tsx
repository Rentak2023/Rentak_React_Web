"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useState } from "react";
import { InputPropsType } from "../types";
import {
  matchRule,
  minLengthRule,
  minRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { trans } from "@mongez/localization";
import { EyeIcon, EyeOffIcon } from "shared/assets/svgs";

function PasswordInput({ placeholder, label, icon, ...props }: InputPropsType) {
  const { id, value, changeValue, error, otherProps } = useFormControl(props);

  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <Flex direction="column" fullWidth gap="0">
      <InputLabel htmlFor={id} required={props.required}>
        <Flex fullWidth justify="space-between">
          {trans(label)}
          {icon && (
            <Flex
              align="center"
              gap="5px"
              style={{ cursor: "pointer" }}
              onClick={showPasswordHandler}>
              {showPassword ? <><EyeOffIcon /> {trans("hide")}</> : <><EyeIcon /> {trans('show')}</>}
            </Flex>
          )}
        </Flex>
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledInput
            type={showPassword ? "text" : "password"}
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

export default PasswordInput;
PasswordInput.defaultProps = {
  // type: "password",
  rules: [requiredRule, matchRule, minLengthRule, minRule],
};
