import { Link } from "@mongez/react-router";
import ImgLogo from "assets/images/Logo.png";
import { TopBarContainer } from "./style";
import URLS from "apps/front-office/utils/urls";
import { Flex } from "apps/front-office/design-system/components/Grids";
import Icons from "../Icons";

export default function TopBar() {
  return (
    <TopBarContainer justify="space-between" align="center" fullWidth>
      <Link to={URLS.home}>
        <img src={ImgLogo} />
      </Link>
      <Flex className="icons--wrapper" gap="12px">
        <Icons />
      </Flex>
    </TopBarContainer>
  );
}
