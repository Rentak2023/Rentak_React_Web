import {
  H5,
  H6,
  P2,
  P4,
} from "apps/front-office/design-system/components/Typography";
import { ServiceIconWrapper, ServiceWrapper } from "./style";
import { ServiceType } from "./types";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { ArrowIcon, DirectionIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";
import useBreakpoints from "apps/front-office/common/hooks/useBreakpoints";

const Service = ({ icon, title, description, link, color }: ServiceType) => {
  const {hd} = useBreakpoints()
  return (
    <ServiceWrapper color={color}>
      <ServiceIconWrapper>{icon}</ServiceIconWrapper>
      <Button noStyle>
        <a href={link}>
          <Flex align="center">
            <H6 color={theme.colors.secondary[600]} weight="700">{title} </H6>
            <ArrowIcon type="right" size={hd ? 42 : 30} />
          </Flex>
        </a>
      </Button>
      <P4 color={theme.colors.secondary[500]} className="description">
        {description}
      </P4>
    </ServiceWrapper>
  );
};

export default Service;
