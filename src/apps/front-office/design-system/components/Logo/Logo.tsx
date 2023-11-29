import URLS from "apps/front-office/utils/urls";
import ImgLogo from "assets/images/Logo.png";
import { LogoStyled } from "./style";
import { Link } from "@mongez/react-router";

export default function Logo() {
  return (
    <LogoStyled>
      <Link to={URLS.home}>
        <img src={ImgLogo} className="center-block" />
      </Link>
    </LogoStyled>
  );
}
