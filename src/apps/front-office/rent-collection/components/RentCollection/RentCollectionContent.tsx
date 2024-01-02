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
import { Form } from "@mongez/react-form";
import ProfileInfoStep from "../form-steps/ProfileInfoStep";
import PaymentMethodStep from "../form-steps/PaymentMethodStep";
import TenantInfoStep from "../form-steps/TenantInfoStep";
import UnitDescriptionStep from "../form-steps/UnitDescriptionStep";
import ConfirmationStep from "../form-steps/ConfirmationStep";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { sendRentCollection } from "../../services/services";
import { labels } from "./labels";
import { useDisclosure } from "@mantine/hooks";
import SuccessModal from "apps/front-office/design-system/components/SuccessModal";

const RentPaymentContent = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [
    openedSuccessModal,
    { open: openSuccessModal, close: closeSuccessModal },
  ] = useDisclosure(false);

  const formRef = useRef<any>();

  const handleNextStep = () => {
    const form = formRef.current as Form;

    form.validateVisible().then(() => {
      if (form.isValid()) {
        // move to the next step
        setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
      }
    });
  };

  const handlePrevStep = () => {
    const form = formRef.current;

    form.validateVisible().then(() => {
      if (form.isValid()) {
        // move to the Prev step
        setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
      }
    });
  };

  const handleSubmit = async ({ values }) => {
    // Handle form submission logic here
    setIsSubmitting(true);
    try {
      const response = await sendRentCollection(values);
      console.log(response.data);
      showNotification({
        message: response.data.message,
      });

      openSuccessModal();

      setTimeout(() => {
        if (response.data.payment_data.redirect_url) {
          window.location.href = response.data.payment_data.redirect_url;
        }
      }, 1500);
    } catch (error: any) {
      if (error.response.data.message) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      } else {
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

  const allSteps = [
    ProfileInfoStep,
    TenantInfoStep,
    PaymentMethodStep,
    UnitDescriptionStep,
    ConfirmationStep,
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
        active={currentStep}
        onStepClick={setCurrentStep}
        className="stepper"
        color={theme.colors.secondary[500]}>
        {[...Array(totalSteps)].map((_, index) => (
          <Stepper.Step
            key={index}
            // onClick={() => setCurrentStep(index + 1)}
            label={labels[index]}
            description={<ArrowIcon type="right" size={36} />}>
            <Line className="line" />
          </Stepper.Step>
        ))}
      </Stepper>

      <Form ref={formRef as any} onSubmit={handleSubmit}>
        <StepWrapper>
          <Grid>
            {allSteps.map((Component, index) => {
              return (
                <Col key={index} hidden={index !== currentStep}>
                  <Component />
                </Col>
              );
            })}
          </Grid>
        </StepWrapper>

        <Flex
          justify={currentStep !== 0 ? "space-between" : "end"}
          fullWidth
          className="buttons">
          {currentStep !== 0 && (
            <Button onClick={handlePrevStep} type="button" variant="outline">
              <P4 color={theme.colors.white}>{trans("back")}</P4>
            </Button>
          )}
          {currentStep < totalSteps - 1 ? (
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
      <SuccessModal opened={openedSuccessModal} close={closeSuccessModal} />
    </StepperWrapper>
  );
};

export default RentPaymentContent;
