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

const PersonalInfoStep = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [userId, setUserId] = useState("");

  const sendOtpHandler = async e => {
    try {
      const response : any = await sendOtp({
        user_phone: phoneNumber,
        user_email: userEmail,
        user_name: userName,
        national_id: nationalId,
      });

      setUserId(response.data.userId)

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

  const verifyOtpHandler = async e => {
    try {
      const response = await verifyOtp({ otp: otp, userId: userId });
      cache.set('token', response.data.token);
      showNotification({
        message: trans('verifySuccess'),
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
    <Col span={10}>
      <TextInput
        name="tenant_name"
        label={trans("fullName")}
        placeholder={trans("fullName")}
        value={userName}
        onChange={e => {
          rentPaymentAtom.update({username: e.target.value})
          setUserName(e.target.value)
        }}
        required
      />
      <TextInput
        name="tenant_national_id"
        label={trans("nationalId")}
        placeholder={trans("nationalId")}
        value={nationalId}
        onChange={e => setNationalId(e.target.value)}
        required
      />
      <EmailInput
        name="tenant_email"
        label={trans("email")}
        placeholder={trans("email")}
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
        required
      />
      <Flex gap="1rem" fullWidth align="end">
        <PhoneNumberInput
          name="tenant_phone"
          label={trans("phoneNumber")}
          placeholder={trans("phoneNumber")}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          required
        />
        <Button onClick={sendOtpHandler}>
          <P4 color={theme.colors.white}>{trans("sendOtp")}</P4>
        </Button>
      </Flex>
      <Flex gap="1rem" fullWidth align="end">
        <NumberInput
          name="otp"
          label={trans("otp")}
          placeholder={trans("otp")}
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />
        <Button onClick={verifyOtpHandler}>
          <P4 color={theme.colors.white}>{trans("verifyOtp")}</P4>
        </Button>
      </Flex>
    </Col>
  );
};

export default PersonalInfoStep;
