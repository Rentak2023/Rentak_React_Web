import {
  FileInputButton,
  StyledFileInput,
  Wrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import {
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";
import { trans } from "@mongez/localization";
import Button from "../../Button";
import { UploadIcon } from "shared/assets/svgs";
import { Small } from "../../Typography";

function FileInput({
  placeholder,
  label,
  icon,
  defaultValue,
  ...props
}: any) {
  const { id, value, changeValue, error } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput error={error}>
        <Wrapper>
          <StyledFileInput
            placeholder={placeholder}
            value={value}
            onChange={changeValue}
            accept="image/png,image/jpeg"
            {...props}
          />
          <FileInputButton>
            <UploadIcon />
            <Small>
              {trans('uploadId')}
            </Small>
          </FileInputButton>
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default FileInput;

FileInput.defaultProps = {
  type: "file",
  rules: [requiredRule],
};
