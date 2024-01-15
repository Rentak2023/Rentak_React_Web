import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";

export const Wrapper = styled.div`
  background-color: #F7F8FA;
  
  .results{
    padding: 47px 0;
    /* position: absolute;
    top: 70px; */
  }
`;
export const PropertiesWrapper = styled.div`
  /* position: relative;
  top: 120px;
  z-index: 99; */
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 52px 0;
  button{
    color: ${theme.colors.secondary[500]};
    border: none;
  };
  button[data-active]{
    background-color: ${theme.colors.secondary[500]};
    :hover{
      background-color: ${theme.colors.secondary[500]} !important;
      opacity: 0.7;
    }
  };
`;
