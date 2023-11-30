import { useEffect, useState } from "react";
import { getProperties } from "../../services/properties-service";
import PropertiesSlider from "./PropertiesSlider";
import {
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import {
  H2,
  P2,
  P4,
} from "apps/front-office/design-system/components/Typography";
import { trans } from "@mongez/localization";
import { PropertiesWrapper } from "./style";
import Button from "apps/front-office/design-system/components/Button";
import { DirectionIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";
import URLS from "apps/front-office/utils/urls";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const getPropertiesHandler = async () => {
    try {
      const response = await getProperties();
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPropertiesHandler();
  }, []);

  return (
    <Container>
      <PropertiesWrapper>
        <H2>{trans("availableRental")}</H2>
        <Flex fullWidth justify="end" className="see--all">
          <Button noStyle>
            <a href={URLS.units} style={{display: "flex"}}>
              <P2 weight="600" color={theme.colors.secondary[400]}>{trans("seeAllUnits")}</P2>
              <DirectionIcon type="right" color={theme.colors.secondary[400]} />
            </a>
          </Button>
        </Flex>
        <PropertiesSlider properties={properties} />
      </PropertiesWrapper>
    </Container>
  );
};

export default Properties;
