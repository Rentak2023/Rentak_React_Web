import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";

export const ServicesWrapper = styled.section`
  padding: 128px 30px 0;
  /* overflow: hidden; */
  ${devices.xSmallMax}{
    padding: 128px 15px;
  }
  h2{
    margin-bottom: 102px;
    font-weight: 700;
  }
  .swiper{
    overflow: visible;
  }
`;
type ServiceWrapperType = {
  color: string
}
export const ServiceWrapper = styled.div<ServiceWrapperType>`
  background-color: ${({color}) => color};
  padding: 52px 44px;
  ${devices.xSmallMax}{
    padding: 40px 20px;
    button svg{
      width: 25px;
    }
  }
  border-radius: 12px;
  height: 579px;
  position: relative;
  margin-bottom: 60px;
  .description {
    height: 165px;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 43px;
  }
  button{
    height: auto;
    > div{
      justify-content: start;
    }
  }
  h5{
    line-height: 125%;
    margin: 20px 0;
  }
`;

export const ServiceIconWrapper = styled.div`
  /* width: 64px;
  height: 64px; */
  /* border-radius: 34px; */
  /* background: rgba(0, 26, 51, 0.2); */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -42px;
    right: -46px;
`;
