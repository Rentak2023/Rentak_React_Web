import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const FormWrapper = styled.div`
  background-color: #f7f8fa;
  padding: 73px 0;
  .flex {
    ${devices.largeMax} {
      flex-direction: column;
      &.search-and-reset {
        flex-direction: column-reverse;
        .reset {
          width: 100%;
          justify-content: end;
        }
      }
    }
  }
`;

export const FormCard = styled.div`
  border-radius: 10.842px;
  border: 1.807px solid ${theme.colors.grey[100]};
  background: #fff;
  padding: 57.825px;
  ${devices.smallMax} {
    padding: 10px;
  }
`;

export const SearchInputWrapper = styled.div`
  .input-wrapper {
    > div {
      border-radius: 124.725px;
      border: 1.386px solid #e3e3e7;
      background: #f2f2f3;
      width: 350px;
      ${devices.smallMax} {
        width: auto;
      }
    }
    input {
      background: transparent;
      border: none;
    }
  }
`;

export const PriceRangeWrapper = styled.div`
  margin-top: 57px;
`;
