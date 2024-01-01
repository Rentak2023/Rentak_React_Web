import { trans } from "@mongez/localization";
import PhoneNumberInput from "apps/front-office/design-system/components/Form/PhoneNumberInput";
import SelectInput from "apps/front-office/design-system/components/Form/SelectInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import { Col } from "apps/front-office/design-system/components/Grids";
import React, { useEffect, useState } from "react";
import { getBanks, getPaymentMethodsOut } from "../../services/services";
import { showNotification } from "apps/front-office/design-system/components/Notifications/showNotification";
import { current } from "@mongez/react";

const OwnerInfoStep = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState();
  const [banks, setBanks] = useState([]);

  const getPaymentMethods = async () => {
    try {
      const response = await getPaymentMethodsOut();
      const formattedPaymentMethods = response.data.map(method => ({
        label:
          current("localeCode") === "ar"
            ? method.method_name_ar
            : method.method_name_en,
        value: String(method.id),
      }));
      setPaymentMethods(formattedPaymentMethods);
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    }
  };
  const getAllBanks = async () => {
    try {
      const response = await getBanks();
      const formattedBanks = response.data.map(method => ({
        label:
          current("localeCode") === "ar"
            ? method.bank_name_ar
            : method.bank_name_en,
        value: String(method.id),
      }));
      setBanks(formattedBanks);
    } catch (error: any) {
      Object.entries(error.response.data.errors).map(([key, value]: any) => {
        return showNotification({
          type: "danger",
          message: value[0],
        });
      });
    }
  };
  useEffect(() => {
    getPaymentMethods();
    getAllBanks();
  }, []);

  const onChangePaymentMethod = value => {
    setPaymentMethod(value);
  };
  return (
    <Col span={12} md={10}>
      <TextInput
        name="landlord_name"
        label={trans("ownerFullName")}
        placeholder={trans("ownerFullName")}
        required
      />
      <PhoneNumberInput
        name="landlord_phone"
        label={trans("ownerPhone")}
        placeholder={trans("ownerPhone")}
        required
      />
      <SelectInput
        name="cash_out_payment_meyhod_id"
        label="transferTo"
        data={paymentMethods}
        clearable
        value={paymentMethod}
        onChange={onChangePaymentMethod}
        required
      />
      {paymentMethod === "4" && (
        <>
          <SelectInput
            name="bank_id"
            label="bank"
            data={banks}
            required
            clearable
          />
          <TextInput
            name="Bank Account Number"
            label={trans("bankAccountNumber")}
            placeholder={trans("bankAccountNumber")}
            required
          />
          <TextInput
            name="bank_account_number"
            label={trans("confirmBankAccountNumber")}
            placeholder={trans("confirmBankAccountNumber")}
            required
            match="Bank Account Number"
          />
        </>
      )}
      {paymentMethod === "5" && (
        <>
          <TextInput
            name="Wallet Account Number"
            label={trans("walletAccountNumber")}
            placeholder={trans("walletAccountNumber")}
            required
          />
          <TextInput
            name="wallet_account_number"
            label={trans("confirmWalletAccountNumber")}
            placeholder={trans("confirmWalletAccountNumber")}
            required
            match="Wallet Account Number"
          />
        </>
      )}
    </Col>
  );
};

export default OwnerInfoStep;
