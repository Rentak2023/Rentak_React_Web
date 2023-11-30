import React from "react";
import { AbsoluteCard, PlansCard, PlansWrapper } from "./style";
import {
  H3,
  P3,
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import Plan from "./Plan";
import { PlanType } from "./types";

const plans: PlanType[] = [
  {
    id: "p1",
    title: trans("planOneTitle"),
    subTitle: trans("planOneSubTitle"),
    description: trans("planOneDescription"),
  },
  {
    id: "p2",
    title: trans("planTwoTitle"),
    subTitle: trans("planTwoSubTitle"),
    description: trans("planTwoDescription"),
  },
  {
    id: "p3",
    title: trans("planThreeTitle"),
    subTitle: trans("planThreeSubTitle"),
    description: trans("planThreeDescription"),
  },
  {
    id: "p4",
    title: trans("planFourTitle"),
    subTitle: trans("planFourSubTitle"),
    description: trans("planFourDescription"),
  },
];

const plansText = [
  {
    text: trans("trinationalRenting"),
  },
  {
    text: trans("planOne"),
  },
  {
    text: trans("planTwo"),
  },
  {
    text: trans("planThree"),
  },
  {
    text: trans("planFour"),
  },
];
const Plans = () => {
  return (
    <Container>
      <PlansWrapper>
        <H3 color={theme.colors.secondary[600]}>{trans("plans")}</H3>
        <Flex fullWidth justify="end">
          <P3 className="trinational-renting">{trans("rentak")}</P3>
        </Flex>
        <PlansCard>
          <ul>
            {plans.map(plan => (
              <Plan
                key={plan.id}
                title={plan.title}
                subTitle={plan.subTitle}
                description={plan.description}
              />
            ))}
          </ul>
        </PlansCard>
        <AbsoluteCard>
          <ul>
            {plansText.map(text => (
              <li key={text.text}>
                <P4 color={theme.colors.white}>{text.text}</P4>
              </li>
            ))}
          </ul>
        </AbsoluteCard>
      </PlansWrapper>
    </Container>
  );
};

export default Plans;
