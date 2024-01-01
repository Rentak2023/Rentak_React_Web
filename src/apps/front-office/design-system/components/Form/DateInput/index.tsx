import { DateWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { DateInput as DatePickerInput } from "@mantine/dates";
import InputLabel from "../InputLabel";
import { requiredRule, useFormControl } from "@mongez/react-form";
import dayjs from "dayjs";
import { trans } from "@mongez/localization";

function DateInput({ placeholder, label, icon, id, ...props }: any) {
  const { changeValue, error, visibleElementRef, otherProps } = useFormControl(props, {
    collectValue: (value: any) => {
      return dayjs(value.value).format('D/M/YYYY')
    },
  });

  return (
    <Flex direction="column" fullWidth gap="0" ref={visibleElementRef}>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <DateWrapper>
            <DatePickerInput
              placeholder={placeholder}
              valueFormat="DD/MM/YYYY"
              wrapperClassName="datePicker"
              onChange={changeValue}
              {...otherProps}
            />
          </DateWrapper>
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default DateInput;
DateInput.defaultProps = {
  rules: [requiredRule],
};