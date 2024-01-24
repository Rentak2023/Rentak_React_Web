import { getCurrentLocaleCode, trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import {
  H2,
  H3,
  H7,
  P2,
} from "apps/front-office/design-system/components/Typography";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { ContactUsCardWrapper, SubmitButtonWrapper } from "./style";
import { Form, HiddenInput } from "@mongez/react-form";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextAreaInput from "apps/front-office/design-system/components/Form/TextAreaInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import SocialMedia from "./SocialMedia";
import { useState } from "react";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { contactUs } from "apps/front-office/home/services/contact-us-service";

const ContactUsCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ values }) => {
    console.log(values);
    setIsSubmitting(true);

    try {
      const response = await contactUs(values);
      showNotification({
        message: response.data.message
      });
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value] : any) => {
        return showNotification({
          type: "danger",
          message: value[0]
        })
      })
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <ContactUsCardWrapper>
      <H7>{trans("haveAQuestion")}</H7>
      <Form onSubmit={onSubmit}>
        <Flex direction="column" gap="16px" fullWidth>
          <HiddenInput name="lang" value={getCurrentLocaleCode()} />
          <TextInput
            name="full_name"
            label="firstName"
            placeholder={trans("firstName")}
            required
            bigRadius
          />
          <PhoneNumberInput
            name="phone"
            label="phone"
            placeholder={trans("phone")}
            required
            bigRadius
          />
          <EmailInput name="email" label="email" placeholder={trans("email")} required bigRadius/>
          <TextInput
            name="subject"
            label="subject"
            placeholder={trans("subject")}
            required
            bigRadius
          />
          <TextAreaInput
            label="message"
            name="message"
            placeholder={trans("message")}
            rows={7}
            required
            bigRadius
          />
        </Flex>
        <SubmitButtonWrapper>
          <SubmitButton
            isSubmitting={isSubmitting}
            radius="12px"
            variant="primary"
            fullWidth>
            {trans("submit")}
          </SubmitButton>
        </SubmitButtonWrapper>
      </Form>
      <SocialMedia />
    </ContactUsCardWrapper>
  );
};

export default ContactUsCard;
