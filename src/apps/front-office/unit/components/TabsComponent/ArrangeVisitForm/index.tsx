import { trans } from "@mongez/localization";
import { Form, HiddenInput } from "@mongez/react-form";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import TextAreaInput from "apps/front-office/design-system/components/Form/TextAreaInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  H4,
  P3,
  P4,
} from "apps/front-office/design-system/components/Typography";
import React, { useState } from "react";
import { ArrangeVisit, TitleWrapper } from "./style";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { theme } from "apps/front-office/design-system";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { visit } from "apps/front-office/unit/services/services";
import { current } from "@mongez/react";

const ArrangeVisitForm = ({ property }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ values }) => {
    setIsSubmitting(true);
    try {
      const response = await visit(values);
      showNotification({
        message: response.data.message,
      });
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
    <ArrangeVisit>
      <TitleWrapper>
        <Flex direction="column">
          <H4 color="#181A20">{trans("arrangeAVisit")}</H4>
          <P3 color="#181A20" weight="400">
            {trans("submitVisitRequest")}
          </P3>
        </Flex>
      </TitleWrapper>
      <Form onSubmit={onSubmit}>
        <Flex gap="32px" fullWidth direction="column">
          <HiddenInput name="unit_id" value={property?.id} />
          <HiddenInput name="lang" value={current('localeCode')}/>
          <DateInput
            name="datetime"
            label="date"
            placeholder={trans("selectDate")}
            required
          />
          <TextInput
            name="name"
            label={trans("name")}
            placeholder={trans("name")}
            required
          />
          <PhoneNumberInput
            name="phone"
            label="phone"
            placeholder={trans("phone")}
            required
          />
          <TextAreaInput
            name="message"
            label="specialRequest"
            placeholder={trans("message")}
            rows={14}
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            color={theme.colors.secondary[400]}
            fullWidth
            className="submit--button">
            <P4 color={theme.colors.white}>{trans("submit")}</P4>
          </SubmitButton>
        </Flex>
      </Form>
    </ArrangeVisit>
  );
};

export default ArrangeVisitForm;
