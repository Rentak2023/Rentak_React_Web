import styled from "@emotion/styled";
import devices from "../../utils/devices";

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 101px;
  padding: 260px 0px 134px 78px;
  ${devices.xxLargeMax}{
    padding: 260px 0px 134px 78px;
  }
  ${devices.largeMax}{
    gap: 70px;
    padding: 200px 25px 0;
  }
  ${devices.mediumMax}{
    gap: 101px;
    padding: 150px 25px 0 25px;
    flex-wrap: wrap;
  }
  ${devices.xSmallMax}{
    padding: 150px 0 0;
    gap: 50px;
    flex-wrap: wrap;
  }
`;  

export const CopyrightWrapper = styled.div`
  padding: 40px;
`
