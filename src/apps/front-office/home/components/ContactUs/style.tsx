import styled from "@emotion/styled";
import devices from "apps/front-office/design-system/utils/devices";

export const ContactUsWrapper = styled.section`
  margin-top: 128px;
  /* padding-top: 44px; */
  ${devices.mediumMax} {
    margin-top: 60px;
  }
  background: #f7f8fa;
  .header {
    margin-top: 27%;
    ${devices.mediumMax} {
      margin-top: 1rem;
    }
  }
  .grid {
    ${devices.mediumMax} {
      flex-direction: column;
    }
  }
`;

export const ContactUsCardWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 42px 32px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(24, 26, 32, 0.05);
  width: 533px;
  flex-shrink: 0;
  position: relative;
  top: 44px;
  ${devices.mediumMax} {
    width: auto;
    padding: 10px;
    .social--media {
      gap: 10px;
    }
  }
`;
