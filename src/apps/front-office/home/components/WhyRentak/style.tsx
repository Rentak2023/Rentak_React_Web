import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";
import mainBg from "shared/assets/images/why-renrak-main-bg.png";

export const Wrapper = styled.section`
  margin-top: 128px;
  ${devices.mediumMax} {
    margin-top: 30px;
  }
  h2 {
    margin: 72px 0;
    ${devices.mediumMax} {
      margin: 1rem;
    }
    text-align: center;
  }
  .grid {
    ${devices.mediumMax} {
      flex-direction: column;
    }
  }
`;

export const BgImageWrapper = styled.div`
  margin-top: 128px;
  ${devices.mediumMax} {
    margin-top: 30px;
  }
  h2 {
    margin: 72px 0;
    ${devices.mediumMax} {
      margin: 1rem;
    }
    text-align: center;
  }
  width: 629.897px;
  ${devices.mediumMax} {
    width: 100%;
  }
`;

export const MainBgWrapper = styled.section`
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const WhyRentakWrapper = styled.section`
  margin-top: 128px;

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
  border-left: 15.967px solid ${theme.colors.secondary[400]};
  border-radius: 25.542px;
  height: 196.872px;
  ${devices.mediumMax} {
    height: 105px;
  }
`;

export const Reason = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  .reason {
    /* flex-flow: wrap; */
    ${devices.mediumMax} {
      flex-flow: column;
    }
    .left{
      max-width: 194px;
    }
  }
`;
