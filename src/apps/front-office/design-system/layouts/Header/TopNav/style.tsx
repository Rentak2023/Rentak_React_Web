import styled from "@emotion/styled";

type TopNavProps = {
  mode?: string;
};

export const TopNavContainer = styled.header<TopNavProps>`
  padding-top: 20px;
  padding-bottom: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  height: ${props => (props.mode === "form" ? "fit-content" : "120px")};
  background-color: ${props =>
    props.mode === "form" ? "rgba(255,255,255, 0.8)" : "transparent"};
  .nav-link {
    :hover {
      P {
        font-weight: 800;
        border-bottom: 1px solid;
      }
    }
  }
`;
