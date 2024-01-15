import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";
import devices from "apps/front-office/design-system/utils/devices";

export const FormWrapper = styled.div`
  background-color: #f7f8fa;
  padding: 73px 0;
`;

export const FormCard = styled.div`
  border-radius: 10.842px;
  border: 1.807px solid ${theme.colors.grey[100]};
  background: #fff;
  padding: 57.825px;
`;

export const SearchInputWrapper = styled.div`
.input-wrapper{
  > div{
    border-radius: 124.725px;
    border: 1.386px solid #E3E3E7;
    background: #F2F2F3;
    width: 350px;
  }
  input{
    background: transparent;
    border: none;
  }
}
`
