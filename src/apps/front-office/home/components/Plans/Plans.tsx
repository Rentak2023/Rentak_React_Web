import React from "react";
import { AbsoluteCard, PlansCard, PlansWrapper } from "./style";
import {
  H5,
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

const traditionalPlans: PlanType[] = [
  {
    id: "p1",
    title: trans("planOneTitle"),
    description: trans("planOne"),
  },
  {
    id: "p2",
    title: trans("planTwoTitle"),
    description: trans("planTwo"),
  },
  {
    id: "p3",
    title: trans("planThreeTitle"),
    description: trans("planThree"),
  },
  {
    id: "p4",
    title: trans("planFourTitle"),
    description: trans("planFour"),
  },
];

const rentakPlans: PlanType[] = [
  {
    id: "p1",
    subTitle: trans("rentak"),
  },
  {
    id: "p1",
    subTitle: trans("planOneSubTitle"),
    description: trans("planOneDescription"),
  },
  {
    id: "p2",
    subTitle: trans("planTwoSubTitle"),
    description: trans("planTwoDescription"),
  },
  {
    id: "p3",
    subTitle: trans("planThreeSubTitle"),
    description: trans("planThreeDescription"),
  },
  {
    id: "p4",
    subTitle: trans("planFourSubTitle"),
    description: trans("planFourDescription"),
  },
];

const Plans = () => {
  return (
    <Container>
      <PlansWrapper>
        {/* <H3 color={theme.colors.secondary[600]}>{trans("plans")}</H3> */}
        <Flex fullWidth justify="end">
          <H5 className="trinational-renting">{trans("trinationalRenting")}</H5>
        </Flex>
        <PlansCard>
          <ul>
            {traditionalPlans.map(plan => (
              <Plan
                key={plan.id}
                title={plan.title}
                // subTitle={plan.subTitle}
                description={plan.description}
              />
            ))}
          </ul>
        </PlansCard>
        <AbsoluteCard>
          <ul>
            {rentakPlans.map(plan => (
              <>
                <li key={plan.id}>
                  <Small color={theme.colors.white} weight="800">
                    {plan.subTitle}
                  </Small>
                  <Small color={theme.colors.white}>{plan.description}</Small>
                </li>
              </>
            ))}
          </ul>
        </AbsoluteCard>
      </PlansWrapper>
    </Container>
  );
};

export default Plans;
