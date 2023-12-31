import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const FormWrapper = styled.div`
  label: FormWrapper;
  .row{
    ${devices.mediumMax}{
      flex-direction: column;
    }
  }
`;
