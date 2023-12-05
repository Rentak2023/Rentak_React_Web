import { trans } from "@mongez/localization";
import { ServicesWrapper } from "./style";
import ServicesSlider from "./ServicesSlider";
import { ServicesIcon } from "assets/svgs";
import { Container } from "apps/front-office/design-system/components/Grids";
import { H2 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import URLS from "apps/front-office/utils/urls";
import useBreakpoints from "apps/front-office/common/hooks/useBreakpoints";
import MobileServices from "./MobileServices";

const services = [
  {
    icon: <ServicesIcon type={1} size={200} />,
    title: trans("serviceOneTitle"),
    description: trans("serviceOneDescription"),
    link: URLS.maintenancePayment,
    color: "rgba(148, 210, 140, 0.10)",
  },
  {
    icon: <ServicesIcon type={2} size={200} />,
    title: trans("serviceTwoTitle"),
    description: trans("serviceTwoDescription"),
    link: URLS.rentCollection,
    color: "rgba(244, 91, 44, 0.10)",
  },
  {
    icon: <ServicesIcon type={3} size={200} />,
    title: trans("serviceThreeTitle"),
    description: trans("serviceThreeDescription"),
    link: URLS.rentPayment,
    color: "rgba(0, 139, 243, 0.10)",
  },
  {
    icon: <ServicesIcon type={4} size={240} />,
    title: trans("serviceFourTitle"),
    description: trans("serviceFourDescription"),
    link: URLS.units,
    color: "rgba(255, 204, 0, 0.10)",
  },
];

const Services = () => {
  const { medium } = useBreakpoints();
  return (
    <div style={{ overflow: "hidden" }}>
      <ServicesWrapper>
        <Container>
          <H2 color={theme.colors.secondary[600]} textAlign="center">
            {trans("ourServices")}
          </H2>
        </Container>
        {medium ? (
          <ServicesSlider services={services} />
          ) : (
          <MobileServices services={services} />
        )}
      </ServicesWrapper>
    </div>
  );
};

export default Services;
