import { trans } from "@mongez/localization";
import { ServicesWrapper } from "./style";

import ServicesSlider from "./ServicesSlider";
import { ServicesIcon } from "assets/svgs";
import { Container } from "apps/front-office/design-system/components/Grids";
import { H2 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";

const services = [
  {
    icon: <ServicesIcon type={1} />,
    title: trans("serviceOneTitle"),
    description: trans("serviceOneDescription"),
    buttonText: trans("serviceOneButtonText"),
    color: "rgba(148, 210, 140, 0.10)",
  },
  {
    icon: <ServicesIcon type={2} />,
    title: trans("serviceTwoTitle"),
    description: trans("serviceTwoDescription"),
    buttonText: trans("serviceTwoButtonText"),
    color: "rgba(255, 204, 0, 0.10)",
  },
  {
    icon: <ServicesIcon type={3} />,
    title: trans("serviceThreeTitle"),
    description: trans("serviceThreeDescription"),
    buttonText: trans("serviceThreeButtonText"),
    color: "rgba(244, 91, 44, 0.10)",
  },
  {
    icon: <ServicesIcon type={4} />,
    title: trans("serviceFourTitle"),
    description: trans("serviceFourDescription"),
    buttonText: trans("serviceFourButtonText"),
    color: "rgba(148, 210, 140, 0.10)",
  },
];
const Services = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <ServicesWrapper>
        <Container>
          <H2 color={theme.colors.secondary[600]} textAlign="center">{trans("ourServices")}</H2>
        </Container>
        <ServicesSlider services={services} />
      </ServicesWrapper>
    </div>
  );
};

export default Services;
