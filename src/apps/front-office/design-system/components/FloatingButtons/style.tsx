import styled from "@emotion/styled";

export const StyledFloatingButtons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FloatingButton = styled.a`
  text-decoration: none;
  text-align: center;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 1;
  :hover {
    opacity: 0.7;
  }
`;
