import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";
import Image from "shared/assets/images/login-bg-1.jpg";

export const Wrapper = styled.div`
  background: url(${Image});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 120px;
  padding-top: 65px;
  padding-bottom: 151px;
  .submit--button {
    border-radius: 40px;
    background-color: ${theme.colors.primaryColor};
    border: none;
  }
  .signup{
    margin-bottom: 14px;
    ${devices.mediumMax}{
      margin-bottom: 24px;
    }
  }
`;
export const Card = styled.div`
  width: 732px;
  padding: 52px 64px;
  ${devices.mediumMax}{
    width: auto;
    padding: 10px;
  }
  border-radius: 24px;
  background: #fff;
  .ltr-Tabs-tabsList,
  .rtl-Tabs-tabsList {
    border: none;
  }
  .ltr-Tabs-tab,
  .rtl-Tabs-tab {
    &:hover{
      background: rgba(17, 17, 17, 0.25);
    }
    display: flex;
    width: 302px;
    ${devices.mediumMax}{
      width: 50%;
    }
    height: 56px;
    padding: 15px 0px 14px 0px;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(17, 17, 17, 0.25);
    border: none;
    &[data-active] {
      background: ${theme.colors.primaryColor};
      color: #fff;
    }
    :first-of-type {
      border-radius: 14px 0 0 14px;
    }
    :last-of-type {
      border-radius: 0 14px 14px 0;
    }
    &.link-tab {
      width: auto;
      height: auto;
      padding: 0;
      border-radius: 0;
      background: #fff;
      color: ${theme.colors.primaryColor}
    }
  }
`;