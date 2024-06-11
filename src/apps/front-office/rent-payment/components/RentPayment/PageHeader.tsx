import BannerHeader from "shared/assets/images/rent-payment-banner.png";
import { BannerContainer, BannerDescription } from "./style";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { trans } from "@mongez/localization";
import {
  H1,
  H2,
  P1,
  P2,
  P3,
} from "apps/front-office/design-system/components/Typography";

const PageHeader = () => {
  return (
    <BannerContainer>
      <img src={BannerHeader} title="Rent Payment Banner" />
      <BannerDescription>
        <Flex direction="column">
          <H2 weight="800" color="white" style={{ marginBottom: "15px" }}>
            {trans("vacayNow")}
          </H2>
          <P1 weight="400" color="white">
            {trans("rentNow")}
          </P1>
        </Flex>
      </BannerDescription>
    </BannerContainer>
  );
};

export default PageHeader;
