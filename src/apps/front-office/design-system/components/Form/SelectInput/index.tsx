import { StyledSelectInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import { requiredRule, useFormControl } from "@mongez/react-form";
import { trans } from "@mongez/localization";

function SelectInput({
  placeholder,
  label,
  icon,
  defaultValue,
  clearable,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, id } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledSelectInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            clearable={clearable}
            value={value}
            onChange={changeValue}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default SelectInput;
SelectInput.defaultProps = {
  rules: [requiredRule],
};
