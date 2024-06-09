import { Wrapper } from "./style";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { SuccessIcon } from "shared/assets/svgs";
import { H4, P1 } from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";

const ThankYouPage = () => {
  return (
    <Wrapper>
      <Flex direction="column" justify="center" align="center" fullWidth>
        <SuccessIcon />
        <H4 color={theme.colors.success[300]}>{trans("paymentSuccess")}!</H4>
        <P1 color={theme.colors.grey[600]}>{trans("hearFromUs")}</P1>
      </Flex>
    </Wrapper>
  );
};

export default ThankYouPage;
