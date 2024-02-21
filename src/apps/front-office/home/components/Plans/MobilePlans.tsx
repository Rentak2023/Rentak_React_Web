import { AbsoluteCard, PlansCard, PlansWrapper } from "./style";
import {
  H5,
  P3,
} from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import Plan from "./Plan";
import checkIcon from "assets/images/CheckIcon.png";
import closeIcon from "assets/images/CloseIcon.png";
import WhiteLogo from "shared/assets/images/white-logo.png"

const traditionalPlans = [
  {
    id: "p1",
    title: trans("planOneTitle"),
    description: <img src={closeIcon} />,
  },
  {
    id: "p2",
    title: trans("planTwoTitle"),
    description: <img src={closeIcon} />,
  },
  {
    id: "p3",
    title: trans("planThreeTitle"),
    description: <img src={closeIcon} />,
  },
  {
    id: "p4",
    title: trans("planFourTitle"),
    description: <img src={closeIcon} />,
  },
];
const rentakPlans = [
  {
    id: "p1",
    description: <img src={WhiteLogo} style={{maxWidth: "50px"}} />,
  },
  {
    id: "p1",
    description: <img src={checkIcon} />,
  },
  {
    id: "p2",
    description: <img src={checkIcon} />,
  },
  {
    id: "p3",
    description: <img src={checkIcon} />,
  },
  {
    id: "p4",
    description: <img src={checkIcon} />,
  },
];

const MobilePlans = () => {
  return (
    <Container>
      <PlansWrapper>
        <Flex fullWidth justify="end">
          <H5 className="trinational-renting">{trans("trinationalRenting")}</H5>
        </Flex>
        <PlansCard>
          <ul>
            {traditionalPlans.map(plan => (
              <>
                <Plan
                  key={plan.id}
                  title={plan.title}
                  description={plan.description}
                />
              </>
            ))}
          </ul>
        </PlansCard>
        <AbsoluteCard>
          <ul>
            {rentakPlans.map(plan => (
              <>
                <li>
                  <P3 color={theme.colors.white} weight="600">
                    {plan.description}
                  </P3>
                </li>
              </>
            ))}
          </ul>
        </AbsoluteCard>
      </PlansWrapper>
    </Container>
  );
};

export default MobilePlans;
