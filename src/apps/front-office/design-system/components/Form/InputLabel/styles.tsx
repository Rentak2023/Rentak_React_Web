import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system/utils/theme";
type InputType = {
  theme?: any;
  error?: boolean;
};

export const Label = styled("label")<InputType>`
  label: input-label;
  display: flex;
  font-weight: 400;
  margin-top: 4px;
  margin-bottom: 10px;
  align-items: center;
  p,
  & {
    font-size: 15px;
  }
  .super {
    color: ${theme.colors.error[200]};
  }

  &:focus-within {
  }
`;
