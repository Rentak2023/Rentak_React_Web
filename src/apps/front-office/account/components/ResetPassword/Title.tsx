import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  H5,
  Small,
} from "apps/front-office/design-system/components/Typography";

const Title = () => {
  return (
    <Flex direction="column" align="center">
      <H5>{trans("resetPassword")}</H5>
      <Small
        textAlign="center"
        color={theme.colors.grey[200]}>
        {trans("resetPasswordSubTitle")}
      </Small>
    </Flex>
  );
};

export default Title;
