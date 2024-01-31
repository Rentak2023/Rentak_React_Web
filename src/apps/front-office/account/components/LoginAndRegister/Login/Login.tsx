import React, { useState } from "react";
import { LogoWrapper, TabWrapper } from "../style";
import Logo from "shared/assets/images/auth-logo.png";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import { trans } from "@mongez/localization";
import PasswordInput from "apps/front-office/design-system/components/Form/PasswordInput";
import { Form } from "@mongez/react-form";
import { Flex } from "apps/front-office/design-system/components/Grids";
import ForgetPassword from "./ForgetPassword";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { login } from "apps/front-office/account/service/auth";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLogin = async ({ values }) => {
    setIsSubmitting(true);
    try {
      await login(values);
      // showNotification({
      //   message: trans("successfullyLogin"),
      // });
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
          <ForgetPassword />
          <SubmitButton
            isSubmitting={isSubmitting}
            fullWidth
            className="submit--button">
            
            <P4 color={theme.colors.white}>{trans("login")}</P4>

          </SubmitButton>
        </Flex>
      </Form>
    </TabWrapper>
  );
};

export default Login;
