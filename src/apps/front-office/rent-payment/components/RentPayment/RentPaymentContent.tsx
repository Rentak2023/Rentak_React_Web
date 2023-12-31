import { useRef, useState } from "react";
import { Grid, Stepper } from "@mantine/core";
import { trans } from "@mongez/localization";
import { P4 } from "apps/front-office/design-system/components/Typography";
import Button from "apps/front-office/design-system/components/Button";
import { Col, Flex } from "apps/front-office/design-system/components/Grids";
import { theme } from "apps/front-office/design-system";
import { StepWrapper, StepperWrapper } from "./style";
import { ArrowIcon } from "shared/assets/svgs";
import { Line } from "apps/front-office/design-system/components/Shapes/Line";
import { Form, useForm, useFormControl } from "@mongez/react-form";
import PersonalInfoStep from "../Steps/PersonalInfoStep";
import PaymentMethodsStep from "../Steps/PaymentMethodsStep";
import OwnerInfoStep from "../Steps/OwnerInfoStep";
import UnitDescriptionStep from "../Steps/UnitDescriptionStep";
import ConfirmationStep from "../Steps/ConfirmationStep";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { sendRentPayment } from "../../services/services";
import { labels } from "./labels";
import SubmitButton from "apps/front-office/design-system/components/Form/SubmitButton";

const RentPaymentContent = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<any>();

  const handleNextStep = () => {
    const form = formRef.current;

    form.validateVisible().then((res) => {
      console.log(res);

      if (form.isValid) {
        // move to the next step
        setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
      }
    });
  };

  const handlePrevStep = () => {
    const form = formRef.current;
    
    form.validateVisible().then((res) => {
      console.log(res);
      
      if (form.isValid) {
        // move to the Prev step
        setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
      }
    });
  };

  const handleSubmit = async ({ values }) => {
    // Handle form submission logic here
    setIsSubmitting(true);
    try {
      const response = await sendRentPayment(values);

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

  const allSteps = [
    <PersonalInfoStep />,
    <PaymentMethodsStep />,
    <OwnerInfoStep />,
    <UnitDescriptionStep />,
    <ConfirmationStep />,
  ];

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

      <Form ref={formRef as any} onSubmit={handleSubmit}>
        <StepWrapper>
          <Grid>
            {allSteps.map((stepCmp, index) => {
              return <Col hidden={index !== currentStep - 1}>{stepCmp}</Col>;
            })}
          </Grid>
        </StepWrapper>

        <Flex
          justify={currentStep !== 1 ? "space-between" : "end"}
          fullWidth
          className="buttons">
          {currentStep !== 1 && (
            <Button onClick={handlePrevStep} type="button" variant="outline">
              <P4 color={theme.colors.white}>{trans("back")}</P4>
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button
              onClick={handleNextStep}
              variant="contract"
              type="button"
              color={theme.colors.secondary[400]}>
              <P4 color={theme.colors.white}>{trans("continue")}</P4>
            </Button>
          ) : (
            <Button type="submit" loading={isSubmitting}>
              <P4 color={theme.colors.white}>{trans("submit")}</P4>
            </Button>
          )}
        </Flex>
      </Form>
    </StepperWrapper>
  );
};

export default RentPaymentContent;
