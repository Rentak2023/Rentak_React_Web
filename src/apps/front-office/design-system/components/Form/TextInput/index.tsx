import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import {
  matchRule,
  maxLengthRule,
  minLengthRule,
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";
import { trans } from "@mongez/localization";
import { useEffect } from "react";

function TextInput({ placeholder, label, icon, ...props }: InputPropsType) {
  const { id, value, changeValue, error, name, visibleElementRef, otherProps } =
    useFormControl(props);

  return (
    <Flex ref={visibleElementRef} direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput error={error}>
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

export default TextInput;

TextInput.defaultProps = {
  type: "text",
  rules: [requiredRule, minLengthRule, maxLengthRule, matchRule],
};
