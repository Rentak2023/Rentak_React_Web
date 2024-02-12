import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  H5,
  Small,
} from "apps/front-office/design-system/components/Typography";
import React from "react";

const Title = () => {
  return (
    <Flex direction="column" align="center">
      <H5>{trans("verifyCode")}</H5>
      <Small textAlign="center" color={theme.colors.grey[200]}>
        {trans("verifyCodeSubTitle")}
      </Small>
    </Flex>
  );
};

export default Title;
