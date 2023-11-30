import { Grid } from "@mantine/core";
import Icons from "../Icons";
import { TopNavContainer } from "./style";
import { trans } from "@mongez/localization";
import Lang from "../Lang";
import URLS from "apps/front-office/utils/urls";
import { Container, Flex } from "apps/front-office/design-system/components/Grids";
import { Logo } from "apps/front-office/design-system/components/Logo";
import { Link } from "@mongez/react-router";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system/utils/theme";
import Button from "apps/front-office/design-system/components/Button";


export default function TopNav() {
  const links = [
    {
      id: "l1",
      text: trans("landlord"),
      url: URLS.landlord,
    },
    {
      id: "l2",
      text: trans("tenants"),
      url: URLS.tenants,
    },
  ];
  return (
    <>
      <TopNavContainer>
        <Container>
          <Grid align="center" justify="space-between">
            <Grid.Col span={4}>
              <Flex gap="40px" align="center">
                <Logo />
                {links.map((link) => (
                  <Link key={link.id} to={link.url} className="nav-link">
                    <P4 color={theme.colors.secondary[500]} weight="600">
                      {link.text}
                    </P4>
                  </Link>
                ))}
              </Flex>
            </Grid.Col>
            <Grid.Col span={4}>
              <Flex gap="32px" align="center" justify="end" fullWidth>
                <Lang />
                <Button 
    style={{ marginRight: "20px" }} 
    onClick={() => window.location.href = URLS.auth.login}
>
    {trans("loginRegister")}
</Button>                <Icons />
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </TopNavContainer>
    </>
  );
}
