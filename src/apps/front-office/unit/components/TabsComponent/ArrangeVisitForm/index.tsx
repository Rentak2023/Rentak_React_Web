import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import TextAreaInput from "apps/front-office/design-system/components/Form/TextAreaInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { H4, P3, P4 } from "apps/front-office/design-system/components/Typography";
import React from "react";
import { ArrangeVisit, TitleWrapper } from "./style";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import { theme } from "apps/front-office/design-system";

const ArrangeVisitForm = () => {
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
      <Form>
        <Flex gap="32px" fullWidth direction="column">
          <DateInput
            name="date"
            label="date"
            placeholder={trans("selectDate")}
            required
          />
          <TextInput
            name="name"
            label={trans("name")}
            placeholder={trans("name")}
            readOnly
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
            required
          />
          <SubmitButton color={theme.colors.secondary[400]} fullWidth className="submit--button">
            <P4 color={theme.colors.white}>{trans("submit")}</P4>
          </SubmitButton>
        </Flex>
      </Form>
    </ArrangeVisit>
  );
};

export default ArrangeVisitForm;
