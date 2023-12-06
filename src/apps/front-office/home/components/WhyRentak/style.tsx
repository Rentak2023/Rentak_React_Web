import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const WhyRentakWrapper = styled.section`
  padding-top: 128px;
  ${devices.mediumMax} {
    padding-top: 30px;
  }
  .main-header {
    text-align: center;
    font-weight: 600;
    margin-top: 80px;
    margin-bottom: 52px;
  }
  .grid {
    ${devices.mediumMax} {
      flex-direction: column;
    }
  }
`;

export const ImageWrapper = styled.div`
  box-shadow: 0px 20.61011px 61.83031px 0px rgba(0, 0, 0, 0.16);
  border-radius: 20.61px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 20.61px;
    object-fit: cover;
    ${devices.smallMax} {
      height: 150px;
    }
  }
`;

export const Line = styled.div`
  border-left: 18.538px solid ${theme.colors.primaryColor};
  border-radius: 25.542px;
  height: 214px;
  ${devices.mediumMax} {
    height: 105px;
  }
  /* ${devices.xSmallMax} {
    height: 150px;
  } */
`;

export const Reason = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;
