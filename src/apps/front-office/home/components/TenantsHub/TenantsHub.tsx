import { Grid } from "@mantine/core";
import {
  Col,
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { Image, TenantsHubWrapper } from "./style";
import Image1 from "assets/images/hub-1.png";
import Image2 from "assets/images/hub-2.png";
import Header from "./Header";
import { TenantsHubIcon } from "shared/assets/svgs";
import { trans } from "@mongez/localization";
import { H6, P3 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";

const items = [
  {
    id: "item-1",
    title: trans("tenantsHubOneTitle"),
    description: trans("tenantsHubOneDescription"),
    icon: <TenantsHubIcon type={1} />,
  },
  {
    id: "item-2",
    title: trans("tenantsHubTwoTitle"),
    description: trans("tenantsHubTwoDescription"),
    icon: <TenantsHubIcon type={2} />,
  },
  {
    id: "item-3",
    title: trans("tenantsHubThreeTitle"),
    description: trans("tenantsHubThreeDescription"),
    icon: <TenantsHubIcon type={3} />,
  },
];

const TenantsHub = () => {
  return (
    <Container>
      <TenantsHubWrapper>
        <Grid>
          <Col md="6">
            <Flex direction="column" justify="end" fullHeight fullWidth>
              <Header />
              <Flex direction="column" gap="30px">
                {items.map(item => (
                  <Flex gap="22px">
                    {item.icon}
                    <Flex direction="column">
                      <H6 color={theme.colors.secondary[400]}>{item.title}</H6>
                      <P3>{item.description}</P3>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Col>
          <Col md="6">
            <Image className="top-image">
              <img src={Image2} />
            </Image>
            <Image className="bottom-image">
              <img src={Image1} />
            </Image>
          </Col>
        </Grid>
      </TenantsHubWrapper>
    </Container>
  );
};

export default TenantsHub;
