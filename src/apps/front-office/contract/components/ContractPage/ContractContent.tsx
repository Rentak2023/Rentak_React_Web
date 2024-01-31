import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { theme } from "apps/front-office/design-system";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";
import FileInput from "apps/front-office/design-system/components/Form/FileInput";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { Line } from "apps/front-office/design-system/components/Shapes/Line";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { sendContract } from "../../services/services";
import { useState } from "react";
import { navigateTo } from "@mongez/react-router";
import { FormWrapper } from "./style";

export default function ContractContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ formData }) => {
    setIsSubmitting(true);
    try {
      const response = await sendContract(formData);

      showNotification({
        message: response.data.message,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Flex direction="column" gap="57px" fullWidth>
          <P4>{trans("personalInfo")}</P4>
          <Flex gap="57px" fullWidth className="row">
            <FileInput
              name="landlord_identity_image"
              label="landlordIdentity"
              placeholder="landlordIdentity"
              required
            />
            <FileInput
              name="tenant_identity_image"
              label="tenantIdentity"
              placeholder="tenantIdentity"
              required
            />
          </Flex>
          <Flex gap="57px" fullWidth className="row">
            <PhoneNumberInput
              name="landlord_phone"
              label="landlordPhone"
              placeholder={trans("phone")}
              required
            />
            <PhoneNumberInput
              name="tenant_phone"
              label="tenantPhone"
              placeholder={trans("phone")}
              required
            />
          </Flex>
          <Line />
          <P4>{trans("unitDescription")}</P4>
          <Flex gap="57px" fullWidth className="row">
            <TextInput
              name="unit_description"
              label="unitDescription"
              placeholder={trans("unitDescription")}
              required
            />
            <NumberInput
              name="unit_area"
              label="unitArea"
              placeholder={trans("unitArea")}
              required
              min={1}
            />
          </Flex>
          <Flex gap="57px" fullWidth className="row">
            <NumberInput
              name="contract_period_in_months"
              label="contractPeriod"
              placeholder={trans("contractPeriod")}
              required
              min={1}
            />
            <DateInput name="contract_start_date" label="startDate" required />
          </Flex>
          <Flex gap="57px" fullWidth className="row">
            <SelectInput
              name="purpose_of_renting"
              label="purposeOfRenting"
              data={[
                { label: trans("residential"), value: "سكني" },
                { label: trans("managerial"), value: "اداري" },
              ]}
              defaultValue={1}
              required
              clearable
            />
            <NumberInput
              name="rent_amount"
              label="rentAmount"
              placeholder={trans("rentAmount")}
              required
              min={1}
            />
          </Flex>
          <Flex gap="57px" fullWidth className="row">
            <NumberInput
              name="insurance_amount"
              label="insuranceAmount"
              placeholder={trans("insuranceAmount")}
              required
              min={1}
            />
          </Flex>
          <Flex gap="57px" fullWidth>
            <SubmitButton
              isSubmitting={isSubmitting}
              variant="contract"
              fullWidth>
              <P4
                color={theme.colors.white}
                style={{ textTransform: "uppercase" }}>
                {trans("createContract")}
              </P4>
            </SubmitButton>
          </Flex>
        </Flex>
      </Form>
    </FormWrapper>
  );
}
