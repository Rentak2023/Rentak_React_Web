import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const HowItWorksWrapper = styled.section`
  margin-top: 128px;
  padding: 109px 30px;
  background: #f7f8fa;
  position: relative;
  h2 {
    margin-bottom: 102px;
    text-align: center;
  }
  .steps--wrapper {
    ${devices.xLargeMax} {
      flex-direction: column;
      .item{
        width: 330px;
        max-width: 100%;
      }
    }
  }
`;

type NumberTypes = {
  color: string;
};

export const NumberWrapper = styled.div<NumberTypes>`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${props => props.color};
  box-shadow:
    0px 1.85185px 3.14815px 0px rgba(150, 114, 255, 0.02),
    0px 8.14815px 6.51852px 0px rgba(150, 114, 255, 0.03),
    0px 20px 13px 0px rgba(150, 114, 255, 0.04),
    0px 38.51852px 25.48148px 0px rgba(150, 114, 255, 0.04),
    0px 64.81481px 46.85185px 0px rgba(150, 114, 255, 0.05),
    0px 100px 80px 0px rgba(150, 114, 255, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const StepDescription = styled.div`
  position: relative;
  h6,
  p {
    text-align: center;
  }
  h6 {
    margin-bottom: 23px;
  }
`;
export const StepItem = styled.div`
  position: relative;
  display: flex;
  ${devices.xLargeMax} {
    flex-direction: column;
    align-items: center;
    svg {
      transform: rotate(90deg);
      height: 233px;
      margin: auto;
    }
  }
`;
