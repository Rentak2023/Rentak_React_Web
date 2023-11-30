import {
  H5,
  P2,
  P4,
} from "apps/front-office/design-system/components/Typography";
import { ServiceIconWrapper, ServiceWrapper } from "./style";
import { ServiceType } from "./types";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { ArrowIcon, DirectionIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";

const Service = ({ icon, title, description, link, color }: ServiceType) => {
  
  return (
    <ServiceWrapper color={color}>
      <ServiceIconWrapper>{icon}</ServiceIconWrapper>
      <Button noStyle>
        <a href={link}>
          <Flex align="center">
            <H5 color={theme.colors.secondary[600]} weight="700">{title} </H5>
            <ArrowIcon type="right" />
          </Flex>
        </a>
      </Button>
      <P2 color={theme.colors.secondary[500]} className="description">
        {description}
      </P2>
    </ServiceWrapper>
  );
};

export default Service;
