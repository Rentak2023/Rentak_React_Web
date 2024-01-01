import React, { useEffect, useState } from "react";
import { trans } from "@mongez/localization";
import Button from "apps/front-office/design-system/components/Button";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col, Flex } from "apps/front-office/design-system/components/Grids";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import { P4 } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import NumberInput from "apps/front-office/design-system/components/Form/NumberInput";
import { sendOtp, verifyOtp } from "../../services/services";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import cache from "@mongez/cache";
import { rentPaymentAtom } from "../../atoms";
import { getActiveForm } from "@mongez/react-form";

const PersonalInfoStep = () => {
  const [userId, setUserId] = useState("");

  const sendOtpHandler = async () => {
    try {
      const form = getActiveForm();
      if (!form) return;

      const {
        tenant_phone: phoneNumber,
        tenant_email: userEmail,
        tenant_name: userName,
        tenant_national_id: nationalId,
      } = form.values([
        "tenant_phone",
        "tenant_email",
        "tenant_name",
        "tenant_national_id",
      ]);

      const response: any = await sendOtp({
        user_phone: phoneNumber,
        user_email: userEmail,
        user_name: userName,
        national_id: nationalId,
      });

      setUserId(response.data.userId);

      showNotification({
        message: response.data.message,
      });
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    }
  };

  const verifyOtpHandler = async () => {
    try {
      const form = getActiveForm();
      const response = await verifyOtp({
        otp: form?.value("otp"),
        userId: userId,
      });

      cache.set("token", response.data.token);

      showNotification({
        message: trans("verifySuccess"),
      });
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    }
  };

  return (
    <Col span={12} md={10}>
      <TextInput
        name="tenant_name"
        label={trans("fullName")}
        placeholder={trans("fullName")}
        onChange={(value) => rentPaymentAtom.update({username: value})}
        required
      />
      <TextInput
        name="tenant_national_id"
        label={trans("nationalId")}
        placeholder={trans("nationalId")}
        required
      />
      <EmailInput
        name="tenant_email"
        label={trans("email")}
        placeholder={trans("email")}
        required
      />
      <Flex gap="1rem" fullWidth align="end" className="otp">
        <PhoneNumberInput
          name="tenant_phone"
          label={trans("phoneNumber")}
          placeholder={trans("phoneNumber")}
          required
        />
        <Button onClick={sendOtpHandler}>
          <P4 color={theme.colors.white}>{trans("sendOtp")}</P4>
        </Button>
      </Flex>
      <Flex gap="1rem" fullWidth align="end" className="otp">
        <NumberInput
          name="otp"
          label={trans("otp")}
          placeholder={trans("otp")}
          required
        />
        <Button onClick={verifyOtpHandler}>
          <P4 color={theme.colors.white}>{trans("verifyOtp")}</P4>
        </Button>
      </Flex>
    </Col>
  );
};

export default PersonalInfoStep;
