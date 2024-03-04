import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const TabsWrapper = styled.div`
  margin-top: 120px;
  
  button[data-active]{

    border-color: ${theme.colors.secondary[500]};
    &:hover{
      border-color: ${theme.colors.secondary[500]};
    }
  }
  .ltr-Tabs-tab,
  .rtl-Tabs-tab {
    padding: 0;
    padding-bottom: 32px;
  }
  .ltr-Tabs-tabsList,
  .rtl-Tabs-tabsList {
    gap: 110px;
  }
`;

export const CardWrapper = styled.div`
  border-radius: 12px;
  background: #f7f7f7;
  padding: 52px;
  margin-top: 100px;
`;

export const IconWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const InspectionWrapper = styled.div`
  margin-top: 80px;
`;

export const InspectionCard = styled.div`

`;
