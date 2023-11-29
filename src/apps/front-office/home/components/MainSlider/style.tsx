import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";
import bg from "assets/images/mainSlider.png";

export const MainSliderWrapper = styled.div`
  /* background: url(${bg}), lightgray 50% / cover no-repeat; */
  position: relative;
  clip-path: ellipse(111% 63% at 50% 37%);
  ${devices.mediumMax} {
      min-height: 100vh;
    }
  img {
    width: 100%;
    ${devices.mediumMax} {
      min-height: 100vh;
    }
  }
`;
export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  ${devices.hdMax} {
    padding-left: 34rem;
  }
  ${devices.xxLargeMax} {
    padding-left: 17rem;
  }
  ${devices.xLargeMax} {
    padding-left: 15rem;
  }
  ${devices.largeMax} {
    padding-left: 12rem;
  }
  ${devices.mediumMax} {
    padding-left: 0rem;
    padding: 1rem
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
    ${devices.smallMax} {
      width: auto;
      font-size: 16px;
    }
  }
`;
