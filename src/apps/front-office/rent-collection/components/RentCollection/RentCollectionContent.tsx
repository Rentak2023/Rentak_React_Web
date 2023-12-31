import React, { useState } from "react";
import { Grid, Stepper } from "@mantine/core";
import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/Button";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col, Flex } from "apps/front-office/design-system/components/Grids";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import { StepWrapper, StepperWrapper } from "./style";
import { ArrowIcon, DirectionIcon } from "shared/assets/svgs";
import { Line } from "apps/front-office/design-system/components/Shapes/Line";
import { Form } from "@mongez/react-form";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import DateInput from "apps/front-office/design-system/components/Form/DateInput";

const RentCollectionContent = () => {
  const totalSteps = 5;
  const labels = [
    <P4 weight="600" style={{ width: "max-content" }}>
      {trans("profileInfo")}
    </P4>,
    <P4 weight="600" style={{ width: "max-content" }}>
      {trans("tenantInfo")}
    </P4>,
    <P4 weight="600" style={{ width: "max-content" }}>
      {trans("paymentMethod")}
    </P4>,
    <P4 weight="600" style={{ width: "max-content" }}>
      {trans("unitDescription")}
    </P4>,
    <P4 weight="600" style={{ width: "max-content" }}>
      {trans("confirmation")}
    </P4>,
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:");
  };

  const renderStep = step => {
    switch (step) {
      case 1:
        return (
          <Col span={10}>
            <TextInput
              name="full_name"
              label={trans("fullName")}
              placeholder={trans("fullName")}
            />
            <PhoneNumberInput
              name="phone"
              label={trans("phoneNumber")}
              placeholder={trans("phoneNumber")}
            />
          </Col>
        );
      case 2:
        return (
          <Col span={10}>
            <TextInput
              name="full_name"
              label={trans("tenantFullName")}
              placeholder={trans("fullName")}
            />
            <PhoneNumberInput
              name="phone"
              label={trans("tenantPhoneNumber")}
              placeholder={trans("phoneNumber")}
            />
          </Col>
        );
      case 3:
        return (
          <Col span={10}>
            <SelectInput
              name="payment_methods"
              label="paymentMethods"
              data={[
                { label: trans("residential"), value: "سكني" },
                { label: trans("managerial"), value: "اداري" },
              ]}
              defaultValue={1}
              required
              clearable
            />
          </Col>
        );
      case 4:
        return (
          <Col span={10}>
            <TextInput
              name="unit_description"
              label={`${trans("unitDescription")} ( ${trans(
                "unitDescriptionHint",
              )} )`}
              placeholder={trans("unitDescription")}
            />
            <NumberInput
              name="rent_amount"
              label={trans("rentAmount")}
              placeholder={trans("rentAmount")}
              min={1}
            />
            <NumberInput
              name="service_fees"
              label={trans("serviceFees")}
              placeholder={trans("serviceFees")}
              min={1}
            />
            <NumberInput
              name="total_amount"
              label={`${trans("totalAmount")} ( ${trans("totalAmountHint")} )`}
              placeholder={trans("totalAmount")}
              min={1}
            />
            <DateInput
              name="contract_start_date"
              label="contractStartDate"
              placeholder="startDate"
              required
            />
            <DateInput
              name="contract_end_date"
              label="contractEndDate"
              placeholder="endDate"
              required
            />
            <NumberInput
              name="total_amount"
              label={trans("annualIncreasePercentage")}
              placeholder={trans("totalAmount")}
              min={1}
            />
            <SelectInput
              name="collection_day"
              label="collectionDay"
              data={[
                { label: trans("residential"), value: "سكني" },
                { label: trans("managerial"), value: "اداري" },
              ]}
              required
              clearable
            />
          </Col>
        );
      case 5:
        return <Col span={10}></Col>;
      default:
        return null;
    }
  };

  return (
    <StepperWrapper>
      <Stepper
        styles={{
          stepBody: {
            flexDirection: "row",
            alignItems: "center",
          },
          separator: {
            display: "none",
          },
        }}
        active={currentStep - 1}
        className="stepper"
        color={theme.colors.secondary[500]}>
        {[...Array(totalSteps)].map((_, index) => (
          <Stepper.Step
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            label={labels[index]}
            description={<ArrowIcon type="right" size={36} />}>
            <Line className="line" />
          </Stepper.Step>
        ))}
      </Stepper>

      <StepWrapper>
        <Form>
          <Grid>{renderStep(currentStep)}</Grid>
        </Form>
      </StepWrapper>

      <Flex
        justify={currentStep !== 1 ? "space-between" : "end"}
        fullWidth
        className="buttons">
        {currentStep !== 1 && (
          <Button onClick={handlePrevStep} variant="outline">
            <P4 color={theme.colors.white}>{trans("back")}</P4>
          </Button>
        )}
        {currentStep < totalSteps ? (
          <Button
            onClick={handleNextStep}
            fullWidth={false}
            variant="contract"
            color={theme.colors.secondary[400]}>
            <P4 color={theme.colors.white}>{trans("continue")}</P4>
          </Button>
        ) : (
          <Button onClick={handleSubmit} fullWidth={false}>
            <P4 color={theme.colors.white}>{trans("submit")}</P4>
          </Button>
        )}
      </Flex>
    </StepperWrapper>
  );
};

export default RentCollectionContent;
