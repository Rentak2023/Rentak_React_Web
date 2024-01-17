import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "../Grids";
import { Select, Input, Textarea, FileInput, Button, Radio } from "@mantine/core";
import { theme } from "../../utils/theme";
import devices from "../../utils/devices";
import { RangeSlider } from '@mantine/core';

type Types = any & {
  error?: boolean;
  variant?: "filled" | "outlined";
  dashed?: boolean;
  inputProps?: any;
  noStyle?: boolean;
  bg?: boolean;
};
export const SubmitButtonWrapper = styled.div<any>`
  /* margin: 16px 0; */
  width: ${({ fullWidth }) => fullWidth ?  "100%" : "auto"};
`;
export const WrapperInput = styled(Flex)<Types>`
  width: 100%;
  input {
    border-color: ${({ error }) => error && theme.colors.error[100]};
  }
`;

export const Wrapper = styled(Flex)<any>`
  label: input-wrapper;
  position: relative;
  height: ${({ height }) => height || "50px"};
  width: 100%;
  border: 1px solid ${theme.colors.grey[100]};
  border-radius: ${({ radius }) => (radius ? "10px" : "3px")};
  padding: 0 10px;
  align-items: center;
  gap: 0.5rem;
  .mantine-Select-root,
  .mantine-Select-wrapper {
    width: 100%;
  }
  input {
    width: 100%;
  }
`;

export const StyledInput = styled(Input)<any>`
  height: 100%;
  flex: 1;
  padding: 0;
  text-align: start;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  padding: 0 10px;
  opacity: 0.7;
  input {
    border: 0;
    height: 100%;
    &:focus,
    &:focus-visible,
    &:active,
    &::focus-within {
      --_input-bd: none;
      outline: none;
    }
  }
  &::placeholder {
    color: ${theme.colors.black[300]};
    font-weight: 300;
    opacity: 0.7;
    font-size: 16px;
  }
  ${devices.large} {
    font-size: 18px;
    padding: 0;
  }
`;
export const StyledTextarea = styled(Textarea)<any>`
  label: textarea;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  textarea {
    border-radius: 8px;
  }
`;

export const StyledTextArea = styled("textarea")<Types>`
  height: 100%;
  padding: 8px;
  flex: 1;
  background: transparent;
  overflow-y: auto;
  resize: none;
  text-align: start;
  border: none;
  outline: none;
  font-family: inherit;
  ${({ error }) => css`
    color: ${error ? theme.colors.error[200] : theme.colors.black};
  `}
  /* font styles */
  font-size: 16px;
  &::placeholder {
    font-weight: normal;
  }
  ${devices.large} {
    font-size: 18px;
    padding: 14px;
  }
`;
export const StyledFileInput = styled(FileInput)`
  label: StyledFileInput;
  width: 100%;
  z-index: 1;
  /* opacity: 0; */
  button {
    border: none;
    background: transparent;
    div{
      width: 65%;
    }
  }
`;
export const FileInputButton = styled(Button)<any>`
  border-radius: 16px 0px 0px 16px;
  background: rgba(217, 217, 217, 0.2);
  position: absolute;
  right: 0;
  height: 100%;
  :hover {
    background-color: rgba(217, 217, 217, 0.4);
  }
`;

export const DateWrapper = styled.div<Types>`
  label: date-input;
  width: 100%;
  input {
    border: none;
  }
`;

export const StyledSelectInput = styled(Select)<Types>`
  label: select-input;
  width: 100%;
  input {
    border: 0;
    height: 100%;
    width: 100%;
  }
`;
export const CheckboxWrapper = styled(Flex)`
  label: Checkbox-wrapper;
  margin: 0.5rem 0;
  input:checked{
    border-color: ${theme.colors.secondary[500]};
    background-color: ${theme.colors.secondary[500]};
  }
`;

export const StyledRadio = styled(Radio)`
  input:checked{
    background-color: #fff;
    border-color: ${theme.colors.secondary[500]};
  }
  svg{
    fill: ${theme.colors.secondary[500]};
    path{
      fill: ${theme.colors.secondary[500]};
    }
  }
`;

export const StyledRangeSlider = styled(RangeSlider)`
  .ltr-Slider-track::before,
  .rtl-Slider-track::before{
    border-radius: 0;
  }
  .ltr-Slider-bar,
  .rtl-Slider-bar{
    background-color: ${theme.colors.secondary[500]};
  }
  .ltr-Slider-thumb,
  .rtl-Slider-thumb{
    background-color: ${theme.colors.secondary[500]};
    border-color: transparent;
    width: 22px;
    height: 22px;
  }
  .ltr-Slider-track,
  .rtl-Slider-track{
    height: 5px;
  }
  .ltr-Slider-markLabel,
  .rtl-Slider-markLabel{
    color: ${theme.colors.secondary[600]};
    position: absolute;
    /* top: -45px; */
  }
  .ltr-Slider-label,
  .rtl-Slider-label{
    /* display: none; */
    background-color: transparent;
    color: ${theme.colors.secondary[500]}
  }
`;