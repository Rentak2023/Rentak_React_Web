import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import Button from "apps/front-office/design-system/components/Button";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { P4 } from "apps/front-office/design-system/components/Typography";
import React, { useState } from "react";
import Layout from "../Layout";
import BackButton from "./BackButton";
import Logo from "shared/assets/images/auth-logo.png";
import Title from "./Title";
import { Form } from "@mongez/react-form";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";

const ForgetPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Layout>
      <Flex fullWidth>
        <BackButton />
      </Flex>
      <Flex justify="center" align="center" fullWidth>
        <img src={Logo} />
      </Flex>
      <Flex justify="center" align="center" fullWidth>
        <Title />
      </Flex>
      <Form>
        <Flex direction="column" fullWidth>
          <PhoneNumberInput
            name="phone"
            placeholder={trans("yourPhone")}
            label={trans("phoneNumber")}
            required
          />
        </Flex>
        <SubmitButton
          isSubmitting={isSubmitting}
          fullWidth
          className="submit--button">
          <P4 color={theme.colors.white}>{trans("login")}</P4>
        </SubmitButton>
      </Form>
    </Layout>
  );
};

export default ForgetPassword;
