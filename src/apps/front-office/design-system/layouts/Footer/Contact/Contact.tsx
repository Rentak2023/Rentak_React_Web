import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Flex } from "apps/front-office/design-system/components/Grids"
import { P4 } from "apps/front-office/design-system/components/Typography"
import { theme } from "apps/front-office/design-system/utils/theme"

const Contact = () => {

  return (
    <Flex direction="column" gap="10px">
      <P4 color={theme.colors.dark} weight="600">{trans("contactUs")}</P4>
      <Flex direction="column" align="start" gap="31px">
        <P4 color={theme.colors.paragraph} >{trans("address")}</P4>
        <a href="mailto:Info@rent-ak.com">
          <P4 color={theme.colors.paragraph}>Info@rent-ak.com</P4>
        </a>
        <a href="tel:+201111111541">
          <P4 style={{ direction: "ltr" }} color={theme.colors.paragraph}>(+20) 111111 - 1541</P4>
        </a>
      </Flex>
    </Flex>
  );
};

export default Contact;
