import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "../../utils/devices";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 25px;
  ${devices.mediumMax}{
    padding: 0;
  }
  button {
    transition: 0.3s background ease;
    :hover {
      border-radius: 16px;
      border: 0.832px solid rgba(245, 239, 235, 0.16);
      background: rgba(0, 26, 51, 0.04);
      p{
        color: ${theme.colors.secondary[600]};
        font-weight: 700;
      }
    }
  }
  .menu--link {
    padding: 26px;
    height: auto;
    span {
      display: flex;
      align-items: center;
      gap: 26px;
    }
  }
  .children--wrapper {
    padding-left: 47px;
    .menu--children{
      button:first-child{
        margin-top: 14px;
      }
      .menu-child--link {
        padding: 16px;
        height: auto;
        > div {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export const UserWrapper = styled.div``;
