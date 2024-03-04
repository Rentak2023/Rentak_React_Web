import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { useState } from "react";
import Layout from "../Layout";
import BackButton from "./BackButton";
import Logo from "shared/assets/images/Logo.png";
import Title from "./Title";
import { Form, HiddenInput } from "@mongez/react-form";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { navigateTo } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import {
  resendVerifyCode,
  verifyCode,
} from "../../service/auth";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import cache from "@mongez/cache";
import user from "../../user";
import { LogoWrapper } from "../LoginAndRegister/style";

const Verify = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitVerify = async ({ values }) => {
    setIsSubmitting(true);
    try {
      const response = await verifyCode(values);
      showNotification({
        message: trans("signUpSuccessfully"),
      });
      user.login({ accessToken: response.data.token });
      setTimeout(() => {
        navigateTo("/");
      }, 1000);
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

  const resendCodeHandler = async () => {
    try {
      const response = await resendVerifyCode({ userId: cache.get("userId") });
      showNotification({
        message: response.data.message,
      });
      console.log(response);
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
    }
  };
  return (
    <Layout>
      <Flex direction="column" gap="40px" fullWidth>
        <Flex fullWidth>
          <BackButton />
        </Flex>
        <LogoWrapper>
          <img src={Logo} />
        </LogoWrapper>
        <Flex justify="center" align="center" fullWidth>
          <Title />
        </Flex>
        <Form onSubmit={submitVerify}>
          <Flex direction="column" gap="24px" fullWidth>
            <HiddenInput name="userId" value={cache.get("userId")} />
            <NumberInput
              name="otp"
              placeholder={trans("codeNumber")}
              label={trans("verificationCode")}
              required
            />
            <Flex gap="0.5rem" justify="end" fullWidth>
              <P4>{trans("notGetCode")}</P4>
              <Button type="button" noStyle onClick={resendCodeHandler}>
                <P4 className="signup" color={theme.colors.primaryColor}>
                  {trans("resendCode")}
                </P4>
              </Button>
            </Flex>
            <SubmitButton
              isSubmitting={isSubmitting}
              fullWidth
              className="submit--button">
              <P4 color={theme.colors.white}>{trans("verify")}</P4>
            </SubmitButton>
          </Flex>
        </Form>
        <Flex gap="0.5rem" justify="center" fullWidth>
          <P4>{trans("notHaveAccount")}</P4>
          <Button noStyle onClick={() => navigateTo(URLS.auth.login)}>
            <P4 className="signup" color={theme.colors.primaryColor}>
              {trans("signup")}
            </P4>
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Verify;
