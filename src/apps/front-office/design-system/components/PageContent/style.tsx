import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "../../utils/devices";

export const Wrapper = styled.div`
 background-color: #F7F8FA;
 /* padding-top: 100px; */
`;

export const Card = styled.div`
  border-radius: 10.842px;
  border: 1.807px solid ${theme.colors.grey[100]};
  background: ${theme.colors.white};
  padding: 57.82px;
  position: relative;
  top: 100px;
  z-index: 9;
  ${devices.smallMax}{
    padding: calc(57px * 0.4);
  }
`;
