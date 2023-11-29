import { trans } from "@mongez/localization"
import { theme } from "apps/front-office/design-system"
import { H2, H3, P2 } from "apps/front-office/design-system/components/Typography"
import { Flex } from "apps/front-office/design-system/components/Grids"

const Header = () => {
  return (
    <Flex direction="column" justify="center" fullHeight className="header">
      <H3 weight="600">{trans("needHelp")}</H3>
      <P2 weight="400">{trans("talkToExperts")}</P2>
    </Flex>
  )
}

export default Header