import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "../../utils/devices";

export const Wrapper = styled.div`
  min-height: 847px;
  background-color: #fff;
  ${devices.xxLargeMax} {
    min-height: 647px;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  h3 {
    /* width: 794px; */
    ${devices.largeMax} {
     width: auto;
    }
  }
`;
