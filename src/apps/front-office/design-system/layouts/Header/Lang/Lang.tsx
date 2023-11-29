import { getCurrentLocaleCode, trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system/utils/theme";
import { changeLocaleCode } from "@mongez/react-router";

const Lang = () => {
  const nextLocaleCode = getCurrentLocaleCode() === "ar" ? "en" : "ar";
  return (
    <>
      <Button noStyle onClick={() => changeLocaleCode(nextLocaleCode)}>
        <Flex gap="0.5rem" align="center">
          <P4 color={theme.colors.secondary[500]} weight="600">
            {trans("lang")}
          </P4>
        </Flex>
      </Button>
    </>
  );
};

export default Lang;
