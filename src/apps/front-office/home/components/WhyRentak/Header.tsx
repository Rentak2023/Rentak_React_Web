import { trans } from "@mongez/localization"
import { theme } from "apps/front-office/design-system"
import { H2, H3, P2 } from "apps/front-office/design-system/components/Typography"

const Header = () => {
  return (
    <>
      <H3 color={theme.colors.secondary[600]} weight="600">{trans("whyRentakHeader")}</H3>
      <P2 color={theme.colors.secondary[500]} weight="600">{trans("whyRentakSubTitle")}</P2>
    </>
  )
}

export default Header