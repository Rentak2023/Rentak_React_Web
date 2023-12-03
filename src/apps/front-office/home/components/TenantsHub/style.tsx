import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";

export const TenantsHubWrapper = styled.section`
  margin: 128px 0;
  ${devices.mediumMax} {
    margin: 60px 0;
  }
`;
export const Image = styled.div`
  width: 400.291px;
  ${devices.mediumMax} {
    width: 300.291px;
  }
  ${devices.smallMax} {
    width: auto;
  }
  flex-shrink: 0;
  border-radius: 23.465px;
  img {
    border-radius: 23.465px;
    height: 100%;
  }
  &.top-image {
    box-shadow: 11.0425px 11.0425px 19.32437px 0px rgba(129, 129, 129, 0.3);
    z-index: 2;
    position: relative;
    bottom: -38px;
    ${devices.smallMax} {
      bottom: 0;
    }
  }
  &.bottom-image {
    position: relative;
    right: -135px;
    ${devices.xLargeMax} {
      right: -168px;
    }
    ${devices.largeMax} {
      right: -68px;
    }
    ${devices.mediumMax} {
      right: -100px;
    }
    ${devices.smallMax} {
      display: none;
    }
  }
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 43px;
`;
