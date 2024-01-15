import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const FormWrapper = styled.div`
  background-color: #f7f8fa;
  padding: 73px;
`;

export const TestimonialsCard = styled.div`
  background: rgba(231, 231, 231, 0.07);
  box-shadow: 0px 4px 34px 0px rgba(180, 180, 180, 0.15);
  margin-top: 160px;
  .swiper-pagination {
    text-align: left;
  }
`;
export const TestimonialsWrapper = styled.div`
  padding: 130px 30px 30px 130px;
`;
export const UserWrapper = styled.div`
  margin: 25px 0 76px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
`;
export const QuoteImageWrapper = styled.div`
  position: relative;
  img{
    position: absolute;
    left: -52px;
    top: -27px;
  }
`
export const TestimonialsCover = styled.div`
  
`;