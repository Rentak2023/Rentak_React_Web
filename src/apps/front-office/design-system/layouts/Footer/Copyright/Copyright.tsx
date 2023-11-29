import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids"
import { P4 } from "apps/front-office/design-system/components/Typography"
import { theme } from "apps/front-office/design-system/utils/theme"
import { CopyrightWrapper } from "../style";

const Copyright = () => {

  return (
    <CopyrightWrapper>
      <Flex fullWidth justify="center">
        <P4 color={theme.colors.paragraph} >{trans("copyright")}</P4>
      </Flex>
    </CopyrightWrapper>
  );
};

export default Copyright;
