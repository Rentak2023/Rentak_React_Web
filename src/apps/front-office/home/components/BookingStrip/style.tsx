import styled from "@emotion/styled";
import { theme } from "apps/front-office/design-system";

export const BookingStripWrapper = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  gap: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);

  .strip {
    width: 240px;
    border-right: 1px solid ${theme.colors.lightGrey};
    :last-of-type {
      width: fit-content;
      border: 0;
    }
  }
`;
