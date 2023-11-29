import { trans } from "@mongez/localization";
import { theme } from "apps/front-office/design-system";
import {
  H2,
  H3,
  H7,
  P2,
} from "apps/front-office/design-system/components/Typography";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { ContactUsCardWrapper } from "./style";
import { Form } from "@mongez/react-form";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextAreaInput from "apps/front-office/design-system/components/Form/TextAreaInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import SocialMedia from "./SocialMedia";
import { contactUs } from "../../services/contact-us-service";
import { useState } from "react";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";

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
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <ContactUsCardWrapper>
      <H7>{trans("haveAQuestion")}</H7>
      <Form onSubmit={onSubmit}>
        <Flex direction="column" gap="16px" fullWidth>
          <TextInput
            name="full_name"
            label="firstName"
            placeholder={trans("firstName")}
          />
          <PhoneNumberInput
            name="phone"
            label="phone"
            placeholder={trans("phone")}
          />
          <EmailInput name="email" label="email" placeholder={trans("email")} />
          <TextInput
            name="subject"
            label="subject"
            placeholder={trans("subject")}
          />
          <TextAreaInput
            label="message"
            name="message"
            placeholder={trans("message")}
            rows={7}
          />
        </Flex>
        <SubmitButton
          isSubmitting={isSubmitting}
          radius="12px"
          variant="primary"
          fullWidth>
          {trans("submit")}
        </SubmitButton>
      </Form>
      <SocialMedia />
    </ContactUsCardWrapper>
  );
};

export default ContactUsCard;
