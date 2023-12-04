import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  P3,
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { PlanType } from "./types";
import { theme } from "apps/front-office/design-system";

const Plan = ({ title, subTitle, description, text }: PlanType) => {
  return (
    <>
      <li>
        <Flex
          justify="space-between"
          align="center"
          fullWidth
          className="list-item">
          <P3 color={theme.colors.secondary[600]} weight="600">
            {title}
          </P3>

          <Flex direction="column" className="description">
            <Small color={theme.colors.secondary[600]}>{description}</Small>
          </Flex>
        </Flex>
      </li>
    </>
  );
};

export default Plan;
