import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";

export const PropertiesWrapper = styled.div`
  .see--all{
    padding: 30px 0;
  }
`;

type PropertyWrapperProps = {
  image: string;
};

export const PropertyWrapper = styled.div<PropertyWrapperProps>`
  background: ${({ image }) =>
    `url(${image}), lightgray 50% / cover no-repeat`};
  min-height: 598.09px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
  position: relative;
  .description {
    margin-top: 35px;
    margin-bottom: 35px;
  }
  /* .price {
    font-size: 40px;
  } */
`;

export const DescriptionWrapper = styled.div`
  padding: 42px 24px;
  background: rgba(255, 255, 255, 0.95);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const PropertyType = styled.div`
  border-radius: 30px;
  background: rgba(139, 207, 127, 0.4);
  min-width: 93px;
  min-height: 37px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
export const Rate = styled.div`
  display: inline-flex;
  padding: 5.768px 11.536px;
  align-items: center;
  gap: 2.884px;
  border-radius: 20.188px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2.884000062942505px);
  margin: 24px;
`;

export const Overlay = styled.div`
  
`
