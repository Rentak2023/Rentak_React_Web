import styled from "@emotion/styled";

export const TopNavContainer = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: 120px;
  .nav-link {
    :hover {
      P {
        font-weight: 800;
        border-bottom: 1px solid;
      }
    }
  }
`;
