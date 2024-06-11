import BannerHeader from "shared/assets/images/rent-payment-banner.png";
import { BannerContainer, BannerDescription } from "./style";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { trans } from "@mongez/localization";
import { H1, P3 } from "apps/front-office/design-system/components/Typography";

const PageHeader = () => {
  return (
    <BannerContainer>
      <img src={BannerHeader} title="Rent Payment Banner" />
      <BannerDescription>
        <Flex direction="column">
          <H1 weight="700" color="white">
            {trans("vacayNow")}
          </H1>
          <P3 weight="400" color="white">
            {trans("rentNow")}
          </P3>
        </Flex>
      </BannerDescription>
    </BannerContainer>
  );
};

export default PageHeader;
