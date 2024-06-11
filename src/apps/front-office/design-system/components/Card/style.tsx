import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "../../utils/devices";

export const Wrapper = styled.div`
  background-color: #f7f8fa;
  padding: 88px 88px 158px 88px;
  .title {
    margin-bottom: 67px;
  }
  ${devices.mediumMax} {
    padding: 1rem;
  }
`;

export const StyledCard = styled.div`
  border-radius: 10.842px;
  border: 1.807px solid ${theme.colors.grey[100]};
  background: ${theme.colors.white};
  padding: 57.82px;
  position: relative;
  z-index: 9;
  ${devices.smallMax} {
    padding: calc(57px * 0.4);
  }
`;
