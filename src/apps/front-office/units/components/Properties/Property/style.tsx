import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";

export const PropertiesWrapper = styled.div`
  .see--all {
    padding: 30px 0;
  }
`;

type PropertyWrapperProps = {
  image: string;
};

export const PropertyWrapper = styled.div<PropertyWrapperProps>`
  /* background: ${({ image }) =>
    `url(${image}), lightgray 50% / cover no-repeat`}; */
  img {
    height: 283px;
    object-fit: cover;
    border-radius: 12px 12px 0px 0px;
    width: 100%;
  }
  min-height: 545px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
  position: relative;
  .description {
    margin-top: 35px;
    margin-bottom: 35px;
  }
  border-radius: 12px;
`;

export const DescriptionWrapper = styled.div`
  /* min-height: 265px; */
  padding: 30px 24px;
  background: rgba(255, 255, 255, 0.95);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 265px;
  border-radius: 0px 0px 12px 12px;
`;

export const PropertyType = styled.div`
  border-radius: 30px;
  min-width: 93px;
  min-height: 37px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Rate = styled.div`
  display: inline-flex;
  padding: 5.768px 11.536px;
  align-items: center;
  gap: 2.884px;
  border-radius: 20px;
  background: rgba(224, 236, 249, 0.5);
  backdrop-filter: blur(2.884000062942505px);
`;

export const Overlay = styled.div``;
