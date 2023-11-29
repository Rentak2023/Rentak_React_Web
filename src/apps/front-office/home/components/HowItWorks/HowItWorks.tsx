import { HowItWorksWrapper, NumberWrapper } from "./style";
import {
  H2,
  H4,
  P3,
} from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { HowItWorksIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";
import Steps from "./Steps";

const stepsText = [
  {
    id: "step1",
    number: trans("1"),
    title: trans("stepOneTitle"),
    description: trans("stepOneDescription"),
    iconType: 1,
    color: "#06C",
  },
  {
    id: "step2",
    number: trans("2"),
    title: trans("stepTwoTitle"),
    description: trans("stepTwoDescription"),
    iconType: 2,
    color: "#008BF3",
  },
  {
    id: "step3",
    number: trans("3"),
    title: trans("stepThreeTitle"),
    description: trans("stepThreeDescription"),
    iconType: 3,
    color: "#DD88EB",
  },
  {
    id: "step4",
    number: trans("4"),
    title: trans("stepFourTitle"),
    description: trans("stepFourDescription"),
    color: "#FC0",
  },
];

const HowItWorks = () => {
  return (
    <HowItWorksWrapper>
      <H2>{trans("howItWorks")}</H2>
      <Flex fullWidth justify="space-around" className="steps--wrapper">
        {stepsText.map(step => (
          <Steps
            key={step.id}
            number={step.number}
            title={step.title}
            iconType={step.iconType}
            description={step.description}
            color={step.color}
          />
        ))}
      </Flex>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
