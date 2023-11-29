import { trans } from "@mongez/localization"
import { theme } from "apps/front-office/design-system"
import { H2, H3, P2 } from "apps/front-office/design-system/components/Typography"
import { HeaderWrapper } from "./style"

const Header = () => {
  return (
    <HeaderWrapper>
      <H3 weight="600">{trans("tenantsHubTitle")}</H3>
      <P2 weight="600">{trans("tenantsHubSubTitle")}</P2>
    </HeaderWrapper>
  )
}

export default Header