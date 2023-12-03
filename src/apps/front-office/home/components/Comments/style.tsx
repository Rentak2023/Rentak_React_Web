import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const CommentsWrapper = styled.section`
  margin-top: 128px;
  padding: 72px 104px 32px;
  ${devices.smallMax}{
    padding: 60px 10px;
  }
  border-radius: 8px;
  background: #f7f8fa;
`;

export const CommentWrapper = styled.div`
  padding: 52px 34px;
  ${devices.xSmallMax}{
    padding: 52px 10px;
  }
  border-radius: 10px;
  background: #fff;
  > svg {
    margin-bottom: 34px;
  }
  .description {
    margin-top: 53px;
  }
  .comment{
    height: 100px;
  }
`;

export const UserWrapper = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
`;

export const SliderWrapper = styled.div`
  .swiper {
    .swiper-wrapper {
      margin-top: 81px;
    }
    .custom--prev,
    .custom--next {
      background: transparent;
      width: auto;
      height: auto;
      top: 32px;
    }
    .custom--prev {
      left: -10px;
    }
    .custom--next {
      right: -10px;
    }
    .swiper-pagination{
      margin-top: 74px;
    }
    .swiper-pagination-bullet{
      background: #80B3E6;
      height: 13px;
      width: 13px;
      &.swiper-pagination-bullet-active{
        background-color: ${theme.colors.secondary[600]};
      }
    }
    
  }
`;
