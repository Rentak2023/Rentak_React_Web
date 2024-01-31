import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { P4 } from "apps/front-office/design-system/components/Typography";
import React from "react";

const ForgetPassword = () => {
  return (
    <Flex justify="end" fullWidth>
      <Button noStyle>
        <P4 color={theme.colors.primaryColor}>{trans("ForgetPassword")}</P4>
      </Button>
    </Flex>
  );
};

export default ForgetPassword;
