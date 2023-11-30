import { Drawer } from "@mantine/core";
import { UserWrapper, Wrapper } from "./style";
import { Flex } from "../Grids";
import Button from "../Button";
import {
  ArrowIcon,
  CloseDrawerIcon,
  SidebarIcon,
  SidebarLinesIcon,
} from "shared/assets/svgs";
import URLS from "apps/front-office/utils/urls";
import { trans } from "@mongez/localization";
import { P3, P4 } from "../Typography";
import { theme } from "../../utils/theme";

const links = [
  {
    url: URLS.services,
    icon: <SidebarIcon type="services" />,
    text: trans("services"),
    children: [
      {
        text: trans("rentPayment"),
        url: URLS.rentPayment,
      },
      {
        text: trans("rentCollection"),
        url: URLS.rentCollection,
      },
      {
        text: trans("maintenancePayment"),
        url: URLS.maintenancePayment,
      },
    ],
  },
  {
    url: URLS.invoices,
    icon: <SidebarIcon type="invoices" color={theme.colors.secondary[600]} />,
    text: trans("invoices"),
    children: null,
  },
  {
    url: URLS.wallet,
    icon: <SidebarIcon type="wallet" color={theme.colors.secondary[600]} />,
    text: trans("wallet"),
    children: null,
  },
  {
    url: URLS.notifications,
    icon: <SidebarIcon type="notifications" color={theme.colors.secondary[600]} />,
    text: trans("notifications"),
    children: null,
  },
  {
    url: URLS.settings,
    icon: <SidebarIcon type="notifications" color={theme.colors.secondary[600]} />,
    text: trans("settings"),
    children: null,
  },
];
const DrawerPage = ({ opened, close }: any) => {

  return (
    <>
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        closeOnClickOutside
        closeOnEscape>
        <Drawer.Content>
          <Drawer.Body
            style={{
              border: "0.832px solid rgba(245, 239, 235, 0.40)",
              background: "rgba(0, 102, 204, 0.10)",
              boxShadow:
                "0px 106.56px 106.56px -53.28px rgba(102, 37, 0, 0.56)",
              backdropFilter: "blur(133.1999969482422px)",
              minHeight: "100vh",
            }}>
            <Wrapper>
              <UserWrapper>
                <Flex justify="end" fullWidth>
                  <Button noStyle onClick={close}>
                    <CloseDrawerIcon />
                  </Button>
                </Flex>
                <Flex direction="column" justify="center">
                  {links.map(link => (
                    <>
                      <Flex gap="26px">
                        <Button noStyle to={link.url} className="menu--link">
                          {link.icon}
                          <P3 weight="700" color={theme.colors.secondary[600]}>{link.text}</P3>
                          {link.children && <ArrowIcon type="top" color={theme.colors.secondary[600]} />}
                        </Button>
                      </Flex>
                      {link.children && (
                        <Flex className="children--wrapper">
                          <SidebarLinesIcon />
                          <Flex
                            className="menu--children"
                            direction="column"
                            gap="1.7rem">
                            {link.children.map(child => (
                              <Button noStyle
                              onClick={() => window.location.href = child.url}
                                className="menu-child--link">
                                <P4 color="rgba(0, 26, 51, 0.56)">{child.text}</P4>
                              </Button>
                            ))}
                          </Flex>
                        </Flex>
                      )}
                    </>
                  ))}
                </Flex>
              </UserWrapper>
            </Wrapper>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default DrawerPage;
