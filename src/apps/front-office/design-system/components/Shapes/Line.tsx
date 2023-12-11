import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Line = styled.div<any>`
  height: 1px;
  width: 100%;
  background: ${({color}) => color ?? "#e1e1e6"};
  /* ${({ color }) =>
    color &&
    css`
      background: ${color ?? "#E1E1E6"};
    `} */
`;
