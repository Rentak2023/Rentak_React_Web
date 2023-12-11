import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const PlansWrapper = styled.section`
  padding-top: 128px;
  ${devices.mediumMax} {
    padding-top: 50px;
  }
  position: relative;
  h3 {
    margin-bottom: 84px;
  }
  .trinational-renting {
    margin-bottom: 16px;
    width: 390px;
    ${devices.largeMax} {
      width: 297px;
    }
    ${devices.mediumMax} {
      width: auto;
    }
    ${devices.smallMax} {
      width: 83px;
      text-align: center;
      font-size: 9px;
      margin-bottom: 5px;
    }
  }
`;

export const PlansCard = styled.div`
  label: plans-card;
  border-radius: 40px;
  background: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;

  ul {
    li {
      padding: 29px 30px;
      ${devices.large} {
        p{
          font-size: 13px;
        }
      }
      ${devices.smallMax} {
        padding: 9px 35px 21px 25px;
        height: 40px;
      }
      ${devices.xSmallMax} {
        height: auto;
        p {
          font-size: 9px;
          max-width: 67px;
        }
      }
      :nth-child(odd) {
        background-color: ${theme.colors.secondary[100]};
      }
    }
  }
  .description {
    width: 330px;
    ${devices.largeMax} {
      width: 268px;
    }
    ${devices.mediumMax} {
      width: fit-content;
    }
    ${devices.smallMax} {
      width: auto;
    }
  }
  .list-item {
    /* ${devices.mediumMax} {
      flex-direction: column;
      gap: 24px;
    } */
  }
`;

export const AbsoluteCard = styled.div`
  position: absolute;
  border-radius: 24px;
  background: #385c95;
  opacity: 0.9;
  width: 380px;
  height: 530px;
  right: 440px;
  top: 100px;
  ul {
    li {
      :first-child {
        padding: 24px 52px;
        ${devices.smallMax} {
          padding: 6px 24px;
        }
        p {
          font-weight: 800;
        }
      }
      padding: 16px 40px;
      ${devices.mediumMax} {
        padding: 26px;
        display: flex;
        justify-content: center;
      }
      ${devices.smallMax} {
        padding: 9px 16px;
        text-align: center;
        p {
          display: inline-block;
          text-align: center;
        }
      }
      ${devices.xSmallMax} {
        padding: 17px;
      }
    }
  }
  ${devices.xLargeMax} {
    right: 405px;
  }
  ${devices.largeMax} {
    right: 330px;
  }
  ${devices.mediumMax} {
    width: fit-content;
    z-index: 9;
    height: fit-content;
    right: 185px;
    top: 34px;
  }
  ${devices.smallMax} {
    position: absolute;
    right: 84px;
    top: 43px;
    height: fit-content;
    width: 80px;
    z-index: 9;
    height: 223px;
  }

  ${devices.xSmallMax} {
    right: 66px;
    width: fit-content;
    height: fit-content;
  }
`;
