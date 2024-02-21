import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";
import bg from "assets/images/mainSlider.png";

export const MainSliderWrapper = styled.div`
  position: relative;
  clip-path: ellipse(111% 63% at 50% 37%);
  ${devices.mediumMax} {
    min-height: 100vh;
  }
  img {
    width: 100%;
    ${devices.mediumMax} {
      min-height: 100vh;
      object-fit: cover;
    }
  }
`;
export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 18px;
  right: 0;
  bottom: 0;
  top: -30rem;
  ${devices.xLargeMax} {
    top: -27rem;
  }
  ${devices.largeMax} {
    top: -21rem;
  }
  ${devices.mediumMax} {
    top: -30rem;
  }
  ${devices.smallMax} {
    top: -37rem;
  }
  ${devices.xSmallMax} {
    top: -31rem;
    left: 4px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    width: 610px;
    line-height: 125%;
    ${devices.mediumMax} {
      width: auto;
    }
  }
  p {
    font-size: 28px;
    font-weight: 600;
    line-height: 150%; /* 150% */
    letter-spacing: 0.28px;
    width: 700px;
    margin-right: 31px;
    ${devices.hdMax} {
      font-size: 28px;
    }
    ${devices.xxLargeMax} {
      font-size: 23px;
    }
    ${devices.xLargeMax} {
      font-size: 21px;
    }
    ${devices.largeMax} {
      font-size: 19px;
    }
    ${devices.mediumMax} {
      font-size: 17px;
    }
    ${devices.smallMax} {
      width: auto;
      font-size: 16px;
    }
  }
`;
