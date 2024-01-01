import React from "react";
import {
  BgImageWrapper,
  ImageWrapper,
  Line,
  MainBgWrapper,
  Reason,
  WhyRentakWrapper,
  Wrapper,
} from "./style";
import Header from "./Header";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { theme } from "apps/front-office/design-system";
import { trans } from "@mongez/localization";
import { H2, P4 } from "apps/front-office/design-system/components/Typography";
import BgImage from "shared/assets/images/why-rentak-bg.png";

const reasons = [
  {
    id: "r1",
    title: trans("reasonOneTitle"),
    text: trans("reasonOne"),
  },
  {
    id: "r2",
    title: trans("reasonTwoTitle"),
    text: trans("reasonTwo"),
  },
];

const WhyRentak = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <H2 className="main-header" color={theme.colors.secondary[600]}>
          {trans("whyRentak")}
        </H2>
        <MainBgWrapper>
          <Flex fullWidth className="grid" justify="center" align="center">
            <Flex direction="column" justify="center">
              <Reason>
                <Flex className="reason" direction="column" align="center" justify="center">
                  <h4>{reasons[0].title}</h4>
                  <P4>{reasons[0].text}</P4>
                </Flex>
                <Line />
              </Reason>
            </Flex>
            <BgImageWrapper>
              <img src={BgImage} />
            </BgImageWrapper>
            <Flex direction="column" justify="center">
              <Reason>
                <Line />
                <Flex className="reason" direction="column" align="center" justify="center">
                  <h4>{reasons[1].title}</h4>
                  <P4>{reasons[1].text}</P4>
                </Flex>
              </Reason>
            </Flex>
          </Flex>
        </MainBgWrapper>
      </Container>
    </Wrapper>
  );
};

export default WhyRentak;
