import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";

export const SliderContainer = styled.div`
  .property--main-thumb--slider {
    margin-bottom: 20px;
    border-radius: 16px;
    height: 728px;
    img{
      border-radius: 16px;
      height: 100%;
    }
  }
  .property--thumb--slider .swiper-slide {
    padding: 0 3px;
    &.swiper-slide-thumb-active {
      img {
        border: 1px solid ${theme.colors.secondary[500]};
      }
    }
    img {
      margin: 10px 0;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid transparent;
      transition: 0.14s ease-in-out;
      cursor: pointer;
    }
  }
  .custom--next,
  .custom--prev{
    width: 30px;
    height: 30px;
    top: 50%;
  }
  .custom--next {
    right: 15px;
  }
  .custom--prev {
    left: 15px;
  }
`;

