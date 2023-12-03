import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const PlansWrapper = styled.section`
  padding-top: 128px;
  position: relative;
  h3 {
    margin-bottom: 84px;
  }
  .trinational-renting {
    margin-bottom: 16px;
    width: 390px;
    ${devices.xSmallMax} {
      width: auto;
    }
  }
`;

export const PlansCard = styled.div`
  border-radius: 40px;
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;

  ul {
    li {
      padding: 29px 60px;
      ${devices.xSmallMax} {
        padding: 20px 10px;
      }
      :nth-child(odd) {
        background-color: ${theme.colors.secondary[100]};
      }
    }
  }
  .description {
    width: 330px;
    ${devices.smallMax} {
      width: auto;
    }
  }
  .list-item {
    ${devices.mediumMax} {
      flex-direction: column;
      gap: 24px;
    }
  }
`;

export const AbsoluteCard = styled.div`
  position: absolute;
  border-radius: 24px;
  background: #385c95;
  opacity: 0.9;
  width: 380px;
  height: 630px;
  right: 440px;
  top: 100px;
  ul {
    li {
      :first-child {
        padding: 24px 52px;
        p{
          font-weight: 800;
        }
      }
      padding: 38px 40px;
    }
  }
  ${devices.xLargeMax} {
    width: 260px;
    right: 405px;
  }
  ${devices.largeMax} {
    /* width: 380px; */
    margin: auto;
    position: relative;
    right: 0;
    top: 30px;
    height: auto;
  }
  ${devices.xSmallMax} {
    width: auto;
    position: relative;
    right: 0;
    top: 30px;
  }
`;
