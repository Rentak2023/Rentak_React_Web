import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";

export const BrandsWrapper = styled.section`
  padding-top: 128px;
  ${devices.mediumMax} {
    padding-top: 60px 0;
  }
  .swiper{
    .custom--next{
      filter: drop-shadow(0px 0px 7px rgba(135, 135, 135, 0.25));
      top: 34px;
      fill: #FFF;
    }
  }
`;
