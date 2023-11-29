import React from "react";
import { ImageWrapper, Line, Reason, WhyRentakWrapper } from "./style";
import Header from "./Header";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { theme } from "apps/front-office/design-system";
import { trans } from "@mongez/localization";
import bgImage from "assets/images/whyRentakBg.png";
import { H2 } from "apps/front-office/design-system/components/Typography";

const reasons = [
  {
    id: "r1",
    text: trans("reasonOne"),
  },
  {
    id: "r2",
    text: trans("reasonTwo"),
  },
];

const WhyRentak = () => {
  return (
    <Container>
      <WhyRentakWrapper>
        <Header />
        <H2 className="main-header" color={theme.colors.secondary[600]}>
          {trans("whyRentak")}
        </H2>
        <Flex gap="120px" fullWidth className="grid">
          <Flex direction="column" gap="169px" justify="center">
            {reasons.map(reason => (
              <Reason key={reason.id}>
                <Line />
                <H2 color={theme.colors.primaryColor} length={45}>{reason.text}</H2>
              </Reason>
            ))}
          </Flex>
          <ImageWrapper>
            <img src={bgImage} />
          </ImageWrapper>
        </Flex>
      </WhyRentakWrapper>
    </Container>
  );
};

export default WhyRentak;
