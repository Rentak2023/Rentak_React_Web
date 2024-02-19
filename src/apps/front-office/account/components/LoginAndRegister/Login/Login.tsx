import React, { useEffect, useState } from "react";
import { LogoWrapper, TabWrapper } from "../style";
import Logo from "shared/assets/images/auth-logo.png";
import { trans } from "@mongez/localization";
import PasswordInput from "apps/front-office/design-system/components/Form/PasswordInput";
import { Form } from "@mongez/react-form";
import { Flex } from "apps/front-office/design-system/components/Grids";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { login } from "apps/front-office/account/service/auth";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import { Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LoginTypeModal from "./LoginTypeModal";
import Button from "apps/front-office/design-system/components/Button";
import { navigateTo } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import user from "apps/front-office/account/user";

const Login = () => {
  const [
    openedLoginTypeModal,
    { open: openLoginTypeModal, close: closeLoginTypeModal },
  ] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    openLoginTypeModal();
  }, [])
  const submitLogin = async ({ values }) => {
    setIsSubmitting(true);
    try {
      const response = await login(values);
      user.login({accessToken: response.data.token})
      openLoginTypeModal();
    } catch (error: any) {
      if (error.response.data.message) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
      if (error.response.data.errors) {
        Object.entries(error.response.data.errors).map(([key, value]: any) => {
          return showNotification({
            type: "danger",
            message: value[0],
          });
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <TabWrapper>
      <LogoWrapper>
        <img src={Logo} />
      </LogoWrapper>
      <Form onSubmit={submitLogin}>
        <Flex direction="column" gap="24px" fullWidth>
          <TextInput
            name="username"
            placeholder={trans("yourEmailOrPhone")}
            label={trans("email")}
            required
          />
          <PasswordInput
            name="password"
            placeholder={trans("yourPassword")}
            label={trans("password")}
            icon
            required
          />
          <Flex justify="end" fullWidth onClick={() => navigateTo(URLS.auth.forgetPassword)}>
            <Button noStyle>
              <P4 color={theme.colors.primaryColor}>{trans("forgetPassword")}</P4>
            </Button>
          </Flex>
          <SubmitButton
            isSubmitting={isSubmitting}
            fullWidth
            className="submit--button">
            <P4 color={theme.colors.white}>{trans("login")}</P4>
          </SubmitButton>
          <Flex gap="0.5rem" justify="center" fullWidth>
            <P4>{trans("notHaveAccount")}</P4>
            <Tabs.Tab value="signup" className="link-tab">
              <P4 color={theme.colors.primaryColor} >
                {trans("signup")}
              </P4>
            </Tabs.Tab>
          </Flex>
        </Flex>
      </Form>
      <LoginTypeModal
        opened={openedLoginTypeModal}
        close={closeLoginTypeModal}
      />
    </TabWrapper>
  );
};

export default Login;
