import BannerHeader from "shared/assets/images/rent-payment-banner.png";
import { BannerContainer, BannerDescription } from "./style";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { trans } from "@mongez/localization";
import {
  H1,
  H4,
  Small,
} from "apps/front-office/design-system/components/Typography";

const PageHeader = () => {
  return (
    <BannerContainer>
      <img src={BannerHeader} title="Rent Payment Banner" />
      <BannerDescription>
        <Flex direction="column">
          <H1 weight="700" color="white">
            {trans("rentPayment")}
          </H1>
          <H4 weight="400" color="white">
            {trans("rentNow")}
          </H4>
          <Small weight="400" color="white">
            {trans("rentPaymentDescription")}
          </Small>
        </Flex>
      </BannerDescription>
    </BannerContainer>
  );
};

export default PageHeader;
