import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const StepperWrapper = styled.div`
  label: StepWrapper;
  ${devices.xLargeMax} {
    .ltr-Stepper-steps,
    .rtl-Stepper-steps {
      flex-wrap: wrap;
    }
  }
  .line {
    margin-top: 57px;
    margin-bottom: 57px;
    ${devices.mediumMax} {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .stepper {
    div.ltr-Stepper-stepIcon,
    div.rtl-Stepper-stepIcon {
      background-color: ${theme.colors.grey[100]};
      border-color: ${theme.colors.grey[100]};
      color: ${theme.colors.grey[200]};
      border: none;
    }
    div[data-progress] {
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary[500]};
    }
    button[data-completed] {
      svg {
        fill: #1d8841 path {

        }
      }
      div.ltr-Stepper-stepIcon,
      div.rtl-Stepper-stepIcon {
        background-color: #1d8841;
        color: ${theme.colors.white};
        border: none;
      }
    }
  }
  .buttons {
    margin-top: 57px;
    button {
      width: auto;
      height: auto;
      min-height: auto;
      padding: 20px 45px;
      ${devices.mediumMax}{
        padding: 14px;
      }
      border-radius: 10.842px;
      p {
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`;

export const StepWrapper = styled.div`
  label: StepWrapper;
  .otp{
    button{
      background-color: ${theme.colors.secondary[400]};
      height: auto;
      padding: 16px;
      border-radius: 10.842px;
    }
    ${devices.mediumMax}{
      flex-direction: column;
    }
  }
`;
