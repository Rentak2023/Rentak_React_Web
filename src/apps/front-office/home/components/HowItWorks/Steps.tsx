import { NumberWrapper, StepDescription, StepItem } from "./style";
import { H4, H5, H6, H7, P3 } from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { HowItWorksIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";

const Steps = ({ number, iconType, title, description, color }) => {
  return (
    <StepItem>
      <Flex direction="column" align="center" className="item">
        <NumberWrapper color={color}>
          <H4 color={theme.colors.white}>{number}</H4>
        </NumberWrapper>
        <StepDescription>
          <H7>{title}</H7>
          <P3>{description}</P3>
        </StepDescription>
      </Flex>
      {iconType && <HowItWorksIcon type={iconType} />}
    </StepItem>
  );
};

export default Steps;
